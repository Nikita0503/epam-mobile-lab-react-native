import Header from '@components/headers/Header';
import TextInputWithHint from '@components/TextInputWithHint';
import UserAvatar from '@components/UserAvatar';
import useAuth from '@hooks/useAuth';
import useCurrentUser from '@hooks/useCurrentUser';
import { INewFile } from '@interfaces/general';
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
import { RefreshControl } from 'react-native-gesture-handler';
import styles from './styles';

const CurrentUserScreen = () => {
  const { logout } = useAuth();
  const { currentUser, error, loading, fetchCurrentUser, updateCurrentUser } =
    useCurrentUser();

  React.useEffect(() => {
    fetchCurrentUser();
  }, []);

  React.useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email);
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [currentUser]);

  const [email, setEmail] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [avatar, setAvatar] = React.useState<INewFile | string | undefined>(
    undefined,
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
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchCurrentUser} />
        }
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

export default CurrentUserScreen;
