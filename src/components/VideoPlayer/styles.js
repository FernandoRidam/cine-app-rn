import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const Styles = StyleSheet.create({
  videoView: {
    width: '100%',
    marginVertical: 10,
  },

  title: {
    fontSize: 16,
    color: '#FFF',
    marginVertical: 5,
  },

  background: {
    alignSelf: 'stretch',
    height: 200,
  },

  emptyVideoView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
  },

  emptyVideo: {
    color: '#FFF',
  },
});

export default Styles;
