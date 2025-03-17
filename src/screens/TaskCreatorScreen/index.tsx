import CustomButton from '@components/UI/CustomButton';
import CustomTextInput from '@components/UI/CustomTextInput';
import useTasks from '@hooks/useTasks';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const TaskCreatorScreen = () => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  const { createTask } = useTasks();

  const navigation = useNavigation();

  const onCreateTaskPress = React.useCallback(() => {
    createTask(title, description, [], () => navigation.goBack());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description]);

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
        <CustomButton onPress={onCreateTaskPress} title="Create Task" />
      </View>
    </View>
  );
};

export default TaskCreatorScreen;
