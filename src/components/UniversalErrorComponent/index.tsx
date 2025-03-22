import CustomButton from '@components/CustomButton';
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

interface IProps {
  errorText: string;
  buttonText: string;
  onHandleError: () => void;
}

const UniversalErrorComponent = ({
  errorText,
  buttonText,
  onHandleError,
}: IProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/6478/6478111.png',
        }}
        style={styles.errorImage}
      />
      <Text style={styles.errorText}>{errorText}</Text>
      <CustomButton buttonStyle={styles.errorButton} onPress={onHandleError}>
        {buttonText}
      </CustomButton>
    </View>
  );
};

export default UniversalErrorComponent;
