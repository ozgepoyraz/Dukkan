import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4dcbdb',
    padding: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    tintColor: 'white',
    alignSelf: 'center',
    margin: 50,
    marginTop: 100,
    borderWidth: 2,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});

export default styles;
