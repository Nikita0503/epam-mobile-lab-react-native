import { Colors } from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    marginHorizontal: 6,
  },
  buttonText: {
    color: Colors.darkBlue,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
