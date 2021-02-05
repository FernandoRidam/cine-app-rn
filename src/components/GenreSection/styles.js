import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  genreContainer: {
    width: '100%',
    paddingBottom: 10,
    marginBottom: 10,
  },

  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  genre: {
    fontSize: 18,
    color: '#FFF',
    marginRight: 15,
    marginBottom: 15,
  },

  skeleton: {
    flexDirection: 'row',
    width: '100%',
  },

  skeletonCard: {
    width: 145,
    height: 215,
    borderRadius: 5,
    marginRight: 15,
    elevation: 1,
  },
});

export default Styles;
