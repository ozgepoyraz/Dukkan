import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({hint, value, onChangeText, securityTextEntry, icon}) => {
  return (
    <View style={styles.input}>
      <Icon style={styles.icon} name={icon} size={25} />
      <TextInput
        placeholder={hint}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={securityTextEntry}
      />
    </View>
  );
};

export default Input;
