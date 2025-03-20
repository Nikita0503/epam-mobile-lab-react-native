import Header from '@components/headers/Header';
import TextInputWithHint from '@components/TextInputWithHint';
import UserAvatar from '@components/UserAvatar';
import useAuth from '@hooks/useAuth';
import useCurrentUser from '@hooks/useCurrentUser';
import { INewFile, IUser } from '@interfaces/general';
import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles';

interface IProps {
  currentUser: IUser;
}

const CurrentUserScreen = ({ currentUser }: IProps) => {
  const { logout } = useAuth();
  const { updateCurrentUser } = useCurrentUser();

  const [email] = React.useState<string>(currentUser.email);
  const [name, setName] = React.useState<string>(currentUser.name);
  const [avatar, setAvatar] = React.useState<INewFile | string | undefined>(
    currentUser.avatar,
  );

  const showCongratulations = React.useCallback(() => {
    Alert.alert('Congratulations!', 'Profile updated successfully');
  }, []);

  const onUpdateCurrentUserPress = React.useCallback(() => {
    updateCurrentUser(name, avatar, showCongratulations);
  }, [name, avatar]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Header title="Profile" hideBackButton={true} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View>
          <UserAvatar avatar={avatar} setAvatar={setAvatar} />
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Name"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInputWithHint hint="Email" value={email} editable={false} />
          </View>
        </View>
        <View>
          <Pressable style={styles.button} onPress={onUpdateCurrentUserPress}>
            <Text style={styles.buttonText}>Update</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
