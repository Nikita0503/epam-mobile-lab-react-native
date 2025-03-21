import { Colors } from '@theme/colors';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.violet,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 14,
    width: Dimensions.get('screen').width,
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addTaskTitle: {
    color: '#FFFFFF90',
    fontSize: 14,
    fontWeight: '400',
  },
  addTaskButton: {
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 40,
  },
  addTaskButtonText: {
    color: Colors.darkBlue,
    fontSize: 12,
    fontWeight: '700',
  },
  taskCountContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 8,
    marginTop: 12,
  },
  taskCountText: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
  },
});

export default styles;
