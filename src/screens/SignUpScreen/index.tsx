import CustomButton from '@components/UI/CustomButton';
import CustomTextInput from '@components/UI/CustomTextInput';
import useAuth from '@hooks/useAuth';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AuthStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const SignUpScreen = () => {
  const [email, setEmail] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [repeatPassword, setRepeatPassword] = React.useState<string>('');
  const [avatar, setAvatar] = React.useState<File | undefined>(undefined);

  const { signUp } = useAuth();

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const onSignUpPress = React.useCallback(() => {
    signUp(email, name, password, repeatPassword, avatar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, name, password, repeatPassword, avatar]);

  const goToSignIn = React.useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: ERouteNames.SIGN_IN_SCREEN }],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <CustomTextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
      </View>
      <View style={styles.textInputContainer}>
        <CustomTextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
      </View>
      <View style={styles.textInputContainer}>
        <CustomTextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.textInputContainer}>
        <CustomTextInput
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          placeholder="Repeat Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={onSignUpPress} title="Sign Up" />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={goToSignIn} title="Go To Sign In" />
      </View>
    </View>
  );
};

export default SignUpScreen;
