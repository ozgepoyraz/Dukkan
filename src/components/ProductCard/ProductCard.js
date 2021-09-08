import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Config from 'react-native-config';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './ProductCard.styles';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress= {onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price} TL</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
