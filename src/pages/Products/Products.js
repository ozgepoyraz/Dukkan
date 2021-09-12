import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hook/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';

const Products = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_PRODUCTS_URL);
  const dispatch = useDispatch();

  const handleProductSelect = id => {
    navigation.navigate('Details', {id});
  };

  const renderProducts = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={{backgroundColor: '#4dcbdb'}}>
      <Button
        loading={loading}
        title="Log out"
        onPress={() => dispatch({type: 'SET_USER', payload: {user: null}})}
      />
      <FlatList data={data} renderItem={renderProducts} />
    </View>
  );
};

export default Products;
