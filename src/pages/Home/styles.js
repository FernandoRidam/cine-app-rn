import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },

  searchResult: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: 15,
    paddingBottom: 75,
    backgroundColor: '#020916',
  },

  titleSearch: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },

  wrapperList: {
    justifyContent: 'space-between',
  },

  emptyView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  scrollContainer: {
    alignItems: 'center',
    width: '100%',
  },

  scroll: {
    width: '100%',
  },

  title: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    marginVertical: 10,
  },

  searchView: {
    position: 'absolute',
    right: 0,
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
    borderTopLeftRadius: 33,
    borderBottomLeftRadius: 33,
    backgroundColor: '#FFC527',
  },

  search: {
    height: '100%',
    fontSize: 22,
    borderRadius: 5,
    color: '#020916'
  },

  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: '100%',
    borderRadius: 5,
  },

  carouselView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 5,
  },

  genresView: {
    flex: 1,
    width: '100%',
  },
});

export default Styles;
