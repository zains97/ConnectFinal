import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PicDisplay = ({route}: any) => {
  console.log('\n\nIMAGE:', route.params.image);
  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        uri: `data:image/jpeg;base64,${route.params.image}`,
      }}></ImageBackground>
  );
};

export default PicDisplay;

const styles = StyleSheet.create({});
