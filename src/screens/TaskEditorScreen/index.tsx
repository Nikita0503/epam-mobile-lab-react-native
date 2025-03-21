import CustomButton from '@components/CustomButton';
import Header from '@components/headers/Header';
import TaskFileList from '@components/TaskFileList';
import TextInputWithHint from '@components/TextInputWithHint';
import useTask from '@hooks/useTask';
import useTasks from '@hooks/useTasks';
import { IFile, INewFile, ITask } from '@interfaces/general';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import styles from './styles';

interface IProps {
  task: ITask;
}

const TaskEditorScreen = ({ task }: IProps) => {
  const [title, setTitle] = React.useState<string>(task.title);
  const [description, setDescription] = React.useState<string>(
    task.description,
  );
  const [oldFiles, setOldFiles] = React.useState<IFile[]>(task.files);
  const [newFiles, setNewFiles] = React.useState<INewFile[]>([]);

  const files = React.useMemo(() => {
    return [...oldFiles, ...newFiles];
  }, [oldFiles, newFiles]);

  const { updateTask, deleteTask } = useTasks();

  const navigation = useNavigation();

  const goToTasks = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const onUpdateTaskPress = React.useCallback(() => {
    updateTask(task.id, title, description, newFiles, oldFiles, goToTasks);
  }, [task, title, description, newFiles, oldFiles]);

  const onDeleteTaskPress = React.useCallback(() => {
    Alert.alert('Are you sure?', 'Do you wanna delete the task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteTask(task.id, goToTasks);
        },
      },
    ]);
  }, [task]);

  const onAddFile = React.useCallback(
    (file: INewFile) => {
      setNewFiles([...newFiles, file]);
    },
    [newFiles],
  );

  const onDeleteFile = React.useCallback(
    (toDeleteFile: IFile | INewFile) => {
      if ('type' in toDeleteFile && 'uri' in toDeleteFile) {
        setNewFiles(
          newFiles.filter((file: INewFile) => file.name !== toDeleteFile.name),
        );
      }
      setOldFiles(
        oldFiles.filter((file: IFile) => file.name !== toDeleteFile.name),
      );
    },
    [newFiles, oldFiles],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Header
        title="Edit task"
        actionButton={{ title: 'Delete', onPress: onDeleteTaskPress }}
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <View style={styles.infoItemContainer}>
              <TextInputWithHint
                hint="Task title"
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <View style={styles.infoItemContainer}>
              <TextInputWithHint
                hint="Task description"
                value={description}
                onChangeText={setDescription}
              />
            </View>
            <View style={styles.infoItemContainer}>
              <TaskFileList
                files={files}
                onAddFile={onAddFile}
                onDeleteFile={onDeleteFile}
              />
            </View>
          </View>
          <CustomButton buttonStyle={styles.button} onPress={onUpdateTaskPress}>
            Save
          </CustomButton>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const TaskEditorScreenWrapper = () => {
  const {
    params: { taskId },
  } = useRoute<RouteProp<AppStackParamList, ERouteNames.TASK_DETAILS>>();
  const { task, error, loading } = useTask(taskId);

  if (loading) {
    return <View />;
  }

  return <TaskEditorScreen task={task!} />;
};

export default TaskEditorScreenWrapper;
