import React from 'react';
import { TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import styles from './styles';

interface IProps extends TextInputProps {
  onChangeText?: (text: string) => void;
  value: string;
  textInputContainerStyle?: ViewStyle;
  textInputStyle?: ViewStyle;
}

const CustomTextInput = ({
  onChangeText,
  value,
  textInputStyle,
  textInputContainerStyle,
  ...props
}: IProps) => {
  return (
    <View style={[styles.container, textInputContainerStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.textInput, textInputStyle]}
        {...props}
      />
    </View>
  );
};

export default CustomTextInput;
