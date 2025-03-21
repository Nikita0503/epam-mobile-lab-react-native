import CustomButton from '@components/CustomButton';
import TextInputWithHint from '@components/TextInputWithHint';
import useAuth from '@hooks/useAuth';
import AppLogoSvgImage from '@images/AppLogoSvgImage';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AuthStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = React.useState<string>('example@gmail.com');
  const [password, setPassword] = React.useState<string>('Password12345');

  const { signIn } = useAuth();

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const onLoginPress = React.useCallback(() => {
    signIn(email, password);
  }, [email, password]);

  const goToSignUp = React.useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: ERouteNames.SIGN_UP_SCREEN }],
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
          <AppLogoSvgImage />
          <Text style={styles.appLogoText}>Welcome!</Text>
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
              hint="Password"
              value={password}
              onChangeText={setPassword}
              hintTextStyle={styles.textInputTitle}
              textInputStyle={styles.textInput}
              secureTextEntry={true}
            />
          </View>
        </View>
        <CustomButton buttonStyle={styles.button} onPress={onLoginPress}>
          Log in
        </CustomButton>
        <CustomButton buttonStyle={styles.button} onPress={goToSignUp}>
          Go to Sign Up
        </CustomButton>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
