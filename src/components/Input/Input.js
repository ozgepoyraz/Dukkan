import {TextInput} from 'react-native';
import React from 'react';
import styles from './Input.styles';

const Input = ({hint}) => {
  return <TextInput style={styles.input} placeholder={hint}></TextInput>;
};

export default Input;
