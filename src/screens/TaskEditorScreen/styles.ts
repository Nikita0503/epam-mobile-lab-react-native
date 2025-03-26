import { Colors } from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingTop: 12,
    paddingBottom: 0,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  infoContainer: {
    marginBottom: 8,
  },
  infoItemContainer: {
    marginBottom: 8,
    marginTop: 8,
  },
  button: {
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    borderRadius: 12,
    marginBottom: 12,
  },
  buttonText: {
    color: Colors.darkBlue,
    fontSize: 18,
    fontWeight: '600',
  },
  taskStatusContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 20,
    flexDirection: 'row',
  },
  taskStatusText: {
    fontSize: 16,
    marginRight: 8,
  },
});

export default styles;
