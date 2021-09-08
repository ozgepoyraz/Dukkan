import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor:'#bdbdbd'
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain'
  },
  body_container: {
      flex: 1,
      backgroundColor: '#e0e0e0',
      justifyContent: 'space-between'
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 5
  },
  price: {
      fontSize: 16,
      fontStyle: 'italic',
      textAlign: 'right',
      margin: 5
  }
    
});

export default styles;
