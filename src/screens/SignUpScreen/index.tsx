import CustomButton from '@components/CustomButton';
import TextInputWithHint from '@components/TextInputWithHint';
import UserAvatar from '@components/UserAvatar';
import useAuth from '@hooks/useAuth';
import { INewFile } from '@interfaces/general';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AuthStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
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
            <TextInputWithHint
              hint="Email"
              value={email}
              onChangeText={setEmail}
              hintTextStyle={styles.textInputTitle}
              textInputStyle={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Name"
              value={name}
              onChangeText={setName}
              hintTextStyle={styles.textInputTitle}
              textInputStyle={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Password"
              value={password}
              onChangeText={setPassword}
              hintTextStyle={styles.textInputTitle}
              textInputStyle={styles.textInput}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Repeat password"
              value={repeatPassword}
              onChangeText={setRepeatPassword}
              hintTextStyle={styles.textInputTitle}
              textInputStyle={styles.textInput}
              secureTextEntry={true}
            />
          </View>
        </View>
        <CustomButton buttonStyle={styles.button} onPress={onSignUpPress}>
          Sign Up
        </CustomButton>
        <CustomButton buttonStyle={styles.button} onPress={goToSignIn}>
          Go to Sign In
        </CustomButton>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
