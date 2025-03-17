import CustomButton from '@components/UI/CustomButton';
import CustomTextInput from '@components/UI/CustomTextInput';
import useAuth from '@hooks/useAuth';
import useCurrentUser from '@hooks/useCurrentUser';
import { IUser } from '@interfaces/general';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface IProps {
  currentUser: IUser;
}

const CurrentUserScreen = ({ currentUser }: IProps) => {
  const { logout } = useAuth();
  const { updateCurrentUser } = useCurrentUser();

  const [name, setName] = React.useState<string>(currentUser.name);

  const onUpdateCurrentUserPress = React.useCallback(() => {
    updateCurrentUser(name);
  }, [name]);

  return (
    <View style={styles.container}>
      <CustomTextInput value={name} onChangeText={setName} />
      <CustomTextInput value={currentUser.email} editable={false} />
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={onUpdateCurrentUserPress}
          title="Update Profile"
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={logout} title="Logout" />
      </View>
    </View>
  );
};

const CurrentUserScreenWrapper = () => {
  const { currentUser, error, loading, fetchCurrentUser } = useCurrentUser();

  React.useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (loading) {
    return <View />;
  }

  return <CurrentUserScreen currentUser={currentUser!} />;
};

export default CurrentUserScreenWrapper;
