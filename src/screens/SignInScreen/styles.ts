import { Colors } from '@theme/colors';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.violet,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  appLogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    flex: 2,
  },
  appLogoText: {
    color: Colors.white,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20,
  },
  textInputsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    flex: 2,
  },
  textInputContainer: {
    flexDirection: 'column',
    marginBottom: 14,
  },
  textInput: {
    height: 50,
    width: Dimensions.get('screen').width * 0.9,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 12,
    color: Colors.white,
    paddingHorizontal: 10,
  },
  textInputTitle: {
    color: '#ffffff90',
    marginBottom: 4,
  },
  button: {
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.9,
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
