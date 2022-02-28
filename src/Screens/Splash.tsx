import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import logo from '../Assets/ConnectLogo.png';

type Props = {};

const Splash = (props: Props) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.splashContainer}>
      <Image
        source={logo}
        resizeMode="contain"
        style={{width: 300, height: 300}}
      />
      <Text style={styles.text}>Connect</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
