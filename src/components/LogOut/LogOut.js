import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

const LogOut = () => {
    const dispatch = useDispatch();
  return (
    <TouchableOpacity
    style= {{ padding: 10}}
      onPress={() => dispatch({type: 'SET_USER', payload: {user: null}})}>
      <Icon name="exit-to-app" size={30}></Icon>
    </TouchableOpacity>
  );
};
export default LogOut;
