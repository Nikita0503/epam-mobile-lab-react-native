import CustomButton from '@components/UI/CustomButton';
import CustomTextInput from '@components/UI/CustomTextInput';
import useAuth from '@hooks/useAuth';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AuthStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const {signIn} = useAuth();

  const navigation =  useNavigation<NavigationProp<AuthStackParamList>>();

  const onLoginPress = React.useCallback(() => {
    signIn(email, password);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const goToSignUp = React.useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: ERouteNames.SIGN_UP_SCREEN }],
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <CustomTextInput value={email} onChangeText={setEmail} placeholder="Email" />
      </View>
      <View style={styles.textInputContainer}>
        <CustomTextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry={true} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={onLoginPress} title="Login"/>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={goToSignUp} title="Go To Sign Up" />
      </View>
    </View>
  );
};

export default LoginScreen;
