import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ActivityIndicator, Text} from 'react-native';
import styles from './Button.styles';

const Button = ({title, onPress, loading}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
