import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

interface IProps {
  loading: boolean;
}

const CommonTaskListLoader = ({ loading }: IProps) => {
  return (
    <View style={styles.container}>{loading && <ActivityIndicator />}</View>
  );
};

export default CommonTaskListLoader;
