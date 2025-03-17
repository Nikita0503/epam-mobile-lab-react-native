import { Colors } from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 6,
    borderRadius: 4,
  },
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: Colors.violet,
  },
  title: {
    color: Colors.white,
  },
});

export default styles;
