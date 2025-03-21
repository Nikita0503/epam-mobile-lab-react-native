import { Colors } from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 8,
  },
});

export default styles;
