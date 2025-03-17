import { Colors } from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.violet,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  title: {
    color: Colors.white,
  },
});

export default styles;
