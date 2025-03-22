import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import styles from './styles';

interface IProps {
  loading: boolean;
  error: any;
}

const CommonTaskListFooter = ({ loading, error }: IProps) => {
  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.errorContainer}>
          <Text>Oops... More tasks are not available</Text>
        </View>
      )}
      {loading && <ActivityIndicator />}
    </View>
  );
};

export default CommonTaskListFooter;
