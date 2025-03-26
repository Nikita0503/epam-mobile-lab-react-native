import { Colors } from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 12,
    paddingBottom: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    color: Colors.darkGray,
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 12,
    marginBottom: 12,
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    color: Colors.darkBlue,
    fontSize: 18,
    fontWeight: '600',
  },
  taskStatusContainer: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  taskStatusContainerDone: {
    backgroundColor: Colors.green,
  },
  taskStatusContainerInProgress: {
    backgroundColor: Colors.blue,
  },
  taskStatusText: {
    fontSize: 14,
    color: Colors.white,
  },
});

export default styles;
