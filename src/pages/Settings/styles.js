import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu: {
    width: '100%',
    height: '100%',
    padding: 5,
  },

  label: {
    fontSize: 18,
    color: '#FFF',
  },

  options: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 150,
    padding: 10,
  },
});

export default Styles;
