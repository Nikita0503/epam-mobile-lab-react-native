import useAuth from '@hooks/useAuth';
import AppLogoSvgImage from '@images/AppLogoSvgImage';
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
            <Text style={styles.textInputTitle}>Login</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
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
        </View>
        <Pressable style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={goToSignUp}>
          <Text style={styles.buttonText}>Go to Sign Up</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
