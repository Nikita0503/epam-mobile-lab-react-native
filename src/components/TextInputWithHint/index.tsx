import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface IProps extends TextInputProps {
  value: string;
  onChangeText?: (text: string) => void;
  hint: string;
  hintTextStyle?: TextStyle;
  textInputStyle?: ViewStyle;
  [key: string]: any;
}

const TextInputWithHint = ({
  value,
  onChangeText,
  hint,
  hintTextStyle,
  textInputStyle,
  ...props
}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.hintText, hintTextStyle]}>{hint}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.textInput, textInputStyle]}
        {...props}
      />
    </View>
  );
};

export default TextInputWithHint;
