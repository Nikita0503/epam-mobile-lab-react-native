import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  loadingText: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 8,
  },
  loadingButton: {
    marginTop: 8,
    paddingHorizontal: 12,
  },
});

export default styles;
