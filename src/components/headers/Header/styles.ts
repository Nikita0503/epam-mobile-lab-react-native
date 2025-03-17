import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '@theme/colors';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.violet,
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 53,
    width: Dimensions.get('screen').width,
  },
  titleText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '600',
    position: 'absolute',
    top: 'auto',
    bottom: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  backButton: {
    zIndex: 1,
    width: 22,
    height: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  actionButton: {
    zIndex: 1,
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.white,
  },
});

export default styles;
