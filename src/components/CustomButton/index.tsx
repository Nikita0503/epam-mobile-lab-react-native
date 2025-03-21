import React from 'react';
import { Pressable, Text, TextStyle, ViewStyle } from 'react-native';
import styles from './styles';

interface IProps {
  children: string;
  onPress?: () => void;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
}

const CustomButton = ({
  children,
  onPress,
  buttonStyle,
  buttonTextStyle,
}: IProps) => {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, buttonTextStyle]}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
