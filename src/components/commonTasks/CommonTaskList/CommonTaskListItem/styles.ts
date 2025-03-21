import { Colors } from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    height: 70,
  },
  titleText: {
    fontSize: 18,
    color: Colors.darkBlue,
    fontWeight: '700',
    flexShrink: 1,
  },
});

export default styles;
