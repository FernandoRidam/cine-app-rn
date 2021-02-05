import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  card: {
    width: 145,
    height: 215,
    borderRadius: 5,
    marginRight: 15,
    elevation: 1,
  },

  linearGradient: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    padding: 5,
    borderRadius: 5,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },

  title: {
    fontSize: 14,
    color: '#FFF',
  },

  averageView: {
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 23,
    borderTopRightRadius: 5,
    backgroundColor: 'rgba(2, 9, 22, 0.9)',
  },

  average: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFC527',
  },
});

export default Styles;
