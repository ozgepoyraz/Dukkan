import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10
    },
    inner_container: {
        backgroundColor: '#e0e0e0',
        flex: 1
    },
    image: {
        height: Dimensions.get('window').height/3,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        marginBottom:10
    },title:{
        fontSize:27,
        fontWeight: 'bold',
        textAlign: 'center'
    },desc: {
        fontSize: 16,
        fontStyle: 'italic',
        margin: 5
    },
    price: {
        fontSize: 20,
        textAlign: 'right',
        margin: 10

    }
  });


export default styles;