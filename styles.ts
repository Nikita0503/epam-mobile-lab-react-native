import { Colors } from '@theme/colors';
import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.violet,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.violet,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default styles;
