import React from 'react';
import {View, Image} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input/Input';
import styles from './Login.styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/shopping.png')}
      />
      <Input hint="Kullanıcı adınızı giriniz." />
      <Input hint="Şifrenizi giriniz." />
      <Button title="GİRİŞ YAP"></Button>
    </View>
  );
};

export default Login;
