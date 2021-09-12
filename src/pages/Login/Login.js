import React from 'react';
import {View, Image, Text} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input/Input';
import styles from './Login.styles';
import {Formik} from 'formik';
import * as yup from 'yup';

const Login = () => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email adress is required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/shopping.png')}
      />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={() => {}}
        validationSchema={loginValidationSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View>
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Input
              hint="Emailinizi giriniz."
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Input
              hint="Şifrenizi giriniz."
              value={values.password}
              onChangeText={handleChange('password')}
              securityTextEntry
            />
            <Button title="GİRİŞ YAP" onPress={handleSubmit}></Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
