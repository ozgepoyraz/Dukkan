import React from 'react';
import {View, Image} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input/Input';
import styles from './Login.styles';
import {Formik} from 'formik';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/shopping.png')}
      />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values.email)}>
        {({handleChange, handleSubmit, values}) => (
          <View>
            <Input
              hint="Emailinizi giriniz."
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Input
              hint="Şifrenizi giriniz."
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button title="GİRİŞ YAP" onPress={handleSubmit}></Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
