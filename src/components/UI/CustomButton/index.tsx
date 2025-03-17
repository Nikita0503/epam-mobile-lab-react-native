import React from 'react';
import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import styles from './styles';

interface IProps extends TouchableOpacityProps {
    onPress?: () => void
    title: string
    buttonStyle?: ViewStyle;
    titleStyle?: TextStyle
}

const CustomButton = ({onPress, title, buttonStyle, titleStyle, ...props}: IProps) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress} {...props}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
