import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import logo from '../Assets/ConnectLogo.png';
import {getMe} from '../Utilities/StoreMe';
import {useDispatch} from 'react-redux';
import {updateMeState} from '../Redux/slices/MeSlice';
import {getUser} from '../Api/userApis';

type Props = {
  navigation: any;
};

const Splash = ({navigation}: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMe().then(res => {
      if (res) {
        dispatch(updateMeState(res));
      }
      setTimeout(() => {
        if (res) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('Login');
        }
      }, 2000);
    });
  }, []);

  // getMe().then(res => {
  //   getUser(res.user._id).then(res => {
  //     dispatch(updateMeState(res));
  //   });
  //   if (res) {
  //   }
  //   setTimeout(() => {
  //     if (res) {
  //       navigation.replace('MainApp');
  //     } else {
  //       navigation.replace('Login');
  //     }
  //   }, 2000);
  // });
  // }, []);

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
