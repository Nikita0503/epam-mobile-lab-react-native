import { Colors } from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.gray,
    borderRadius: 4,
    padding: 4,
  },
  title: {},
  actionsContainer: {
    flexDirection: 'row',
  },
  actionContainer: {
    marginLeft: 4,
  },
});

export default styles;
