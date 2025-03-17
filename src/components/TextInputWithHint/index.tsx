import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from './styles';

interface IProps extends TextInputProps {
  value: string;
  onChangeText?: (text: string) => void;
  hint: string;
  [key: string]: any;
}

const TextInputWithHint = ({ value, onChangeText, hint, ...props }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.hintText}>{hint}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};

export default TextInputWithHint;
