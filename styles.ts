import { Colors } from '@theme/colors';
import { Platform, StatusBar, StyleSheet } from 'react-native';

let statusBarHeight = StatusBar.currentHeight;
if (statusBarHeight === undefined || statusBarHeight === 0) {
  statusBarHeight = 50;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.violet,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.violet,
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
  },
});

export default styles;
