import UserAvatar from '@components/UserAvatar';
import useAuth from '@hooks/useAuth';
import { INewFile } from '@interfaces/general';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AuthStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Colors } from '@theme/colors';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';

const SignUpScreen = () => {
  const [email, setEmail] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [repeatPassword, setRepeatPassword] = React.useState<string>('');
  const [avatar, setAvatar] = React.useState<INewFile | undefined>(undefined);

  const { signUp } = useAuth();

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const onSignUpPress = React.useCallback(() => {
    signUp(email, name, password, repeatPassword, avatar);
  }, [email, name, password, repeatPassword, avatar]);

  const goToSignIn = React.useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: ERouteNames.SIGN_IN_SCREEN }],
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.appLogoContainer}>
          <UserAvatar avatar={avatar} setAvatar={setAvatar} />
        </View>
        <View style={styles.textInputsContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              cursorColor={Colors.white}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              cursorColor={Colors.white}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              cursorColor={Colors.white}
              secureTextEntry={true}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Repeat password</Text>
            <TextInput
              value={repeatPassword}
              onChangeText={setRepeatPassword}
              cursorColor={Colors.white}
              secureTextEntry={true}
              style={styles.textInput}
            />
          </View>
        </View>
        <Pressable style={styles.button} onPress={onSignUpPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={goToSignIn}>
          <Text style={styles.buttonText}>Go to Sign In</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
