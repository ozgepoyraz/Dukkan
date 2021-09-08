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

const Products = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_URL);

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
    <View>
      <FlatList data={data} renderItem={renderProducts} />
    </View>
  );
};

export default Products;
