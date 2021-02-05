import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 195,
    borderRadius: 8,
    elevation: 1,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  linearGradient: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    padding: 5,
    borderRadius: 8,
  },

  cover: {
    flex: 1,
    width: 115,
    height: '100%',
    borderRadius: 5,
  },

  info: {
    flex: 2,
    flexDirection: 'column',
    paddingVertical: 10,
    marginLeft: 15,
  },

  title: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default Styles;
