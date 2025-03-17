import { Colors } from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
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
  taskAddPhotoContainer: {},
  locationCheckBoxContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  taskTypesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskTypeContainer: {
    marginBottom: 8,
    width: '100%',
  },
  taskTypesTitleText: {
    color: '#464963',
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 6,
    width: '100%',
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
});

export default styles;
