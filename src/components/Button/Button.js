import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import styles from './Button.styles';

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
