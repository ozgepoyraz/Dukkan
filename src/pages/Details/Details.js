import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import useFetch from '../../hook/useFetch';
import styles from './Details.styles';

const Details = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(Config.API_URL + '/' + id);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
};

export default Details;
