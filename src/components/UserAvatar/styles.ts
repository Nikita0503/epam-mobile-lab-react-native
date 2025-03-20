import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    position: 'relative', // Чтобы дочерние элементы могли использовать absolute
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
  },
  actionContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    padding: 8,
    position: 'absolute',
    borderWidth: 1,
  },
  deleteAvatarAction: {
    bottom: 5,
    left: 5,
  },
  changeAvatarAction: {
    bottom: 5,
    right: 5,
  },
});

export default styles;
