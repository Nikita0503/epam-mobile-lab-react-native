import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  errorText: {
    fontSize: 14,
    marginTop: 8,
  },
  errorButton: {
    marginTop: 8,
    paddingHorizontal: 12,
  },
});

export default styles;
