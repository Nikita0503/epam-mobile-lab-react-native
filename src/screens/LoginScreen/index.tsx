import useAuth from '@hooks/useAuth';
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const {signIn} = useAuth();

  const onLoginPress = React.useCallback(() => {
    signIn(email, password);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput value={password} onChangeText={setPassword} placeholder="Password" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={onLoginPress}/>
      </View>
    </View>
  );
};

export default LoginScreen;
