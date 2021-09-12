import {TextInput} from 'react-native';
import React from 'react';
import styles from './Input.styles';

const Input = ({hint, value, onChangeText, securityTextEntry}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={hint}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={securityTextEntry}></TextInput>
  );
};

export default Input;
