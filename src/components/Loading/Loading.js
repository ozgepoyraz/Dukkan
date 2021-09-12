import LottieView from 'lottie-react-native';
import React from 'react';

const Loading = () => {
  return (
    <LottieView
      source={require('../../../assets/9844-loading-40-paperplane.json')}
      autoPlay={true}
    />
  );
};
export default Loading;
