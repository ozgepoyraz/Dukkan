import React from 'react';
import {View, Image, Text, Alert} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input/Input';
import styles from './Login.styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import usePost from '../../hook/usePost';
import Config from 'react-native-config';
import Error from '../../components/Error';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  const handleLogin = values => {
    console.log;
    post(Config.API_USERS_URL + '/login', values);
    console.log(data);
  };

  const loginValidationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  if (data) {
    if (data.status == 'Error') {
      Alert.alert('Uyarı', 'Kullanıcı bulunamadı.');
    } else {
      navigation.navigate('Products');
    }
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/shopping.png')}
      />
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}
        validationSchema={loginValidationSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View>
            {errors.username && touched.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Input
              hint="Kullanıcı isminizi giriniz."
              value={values.username}
              onChangeText={handleChange('username')}
              icon="account"
            />
            <Input
              hint="Şifrenizi giriniz."
              value={values.password}
              onChangeText={handleChange('password')}
              icon="lock"
              securityTextEntry
            />
            <Button
              title="GİRİŞ YAP"
              onPress={handleSubmit}
              loading={loading}></Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
