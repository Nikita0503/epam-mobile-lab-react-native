import CustomButton from '@components/UI/CustomButton';
import CustomTextInput from '@components/UI/CustomTextInput';
import useTask from '@hooks/useTask';
import useTasks from '@hooks/useTasks';
import { ITask } from '@interfaces/general';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface IProps {
  task: ITask;
}

const TaskEditorScreen = ({ task }: IProps) => {
  const [title, setTitle] = React.useState<string>(task.title);
  const [description, setDescription] = React.useState<string>(
    task.description,
  );

  const { updateTask } = useTasks();

  const navigation = useNavigation();

  const onUpdateTaskPress = React.useCallback(() => {
    updateTask(task.id, title, description, [], [], () => navigation.goBack());
  }, [task, title, description]);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <CustomTextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
        />
      </View>
      <View style={styles.textInputContainer}>
        <CustomTextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={onUpdateTaskPress} title="Update Task" />
      </View>
    </View>
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
