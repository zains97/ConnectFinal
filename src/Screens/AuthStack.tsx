import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Login, Signup, Home, MainApp, OtherProfile} from '.';
import Profile from './Profile';

const Stack = createNativeStackNavigator();
type Props = {};

const AuthStack = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="OtherProfile" component={OtherProfile} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
