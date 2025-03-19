import { Colors } from '@theme/colors';
import { Dimensions, StyleSheet } from 'react-native';

const IMAGE_SIZE = Dimensions.get('screen').width * 0.9;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000095',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 12,
    width: IMAGE_SIZE,
    marginTop: 10,
  },
  buttonText: {
    color: Colors.darkBlue,
    fontSize: 18,
    fontWeight: '600',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 10,
  },
});

export default styles;
