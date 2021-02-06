import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(2, 9, 22, 0.9)'
  },

  scroll: {
    width: '100%',
  },

  scrollContainer: {
    paddingHorizontal: 5,
  },

  coverView: {
    flexDirection: 'row',
  },

  cover: {
    width: 115,
    height: 195,
    borderRadius: 5,
  },

  info: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 25,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#FFF',
  },

  average: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 15,
    color: '#FFF',
  },

  overview: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 5,
    color: '#FFF',
  },

  trailers: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#FFF',
  },

  emptyView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
  },

  empty: {
    color: '#FFF',
  },
});

export default Styles;
