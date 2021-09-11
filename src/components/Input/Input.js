import {TextInput} from 'react-native';
import React from 'react';
import styles from './Input.styles';

const Input = ({hint, value, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={hint}
      value={value}
      onChangeText={onChangeText}></TextInput>
  );
};

export default Input;
