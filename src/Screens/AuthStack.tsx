import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  Login,
  Signup,
  Home,
  MainApp,
  OtherProfile,
  UpdateProfile,
  FriendRequests,
  Chatroom,
} from '.';
import Profile from './Profile';
import {Header} from '../Components';
import SignUp2 from './SignUp2';
import SelectPersonToChat from './SelectPersonToChat';

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
      <Stack.Screen name="SignUp2" component={SignUp2} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="SelectChat" component={SelectPersonToChat} />
      <Stack.Screen
        name="OtherProfile"
        component={OtherProfile}
        options={{
          headerTitle: props => <Header />,
          headerBackButtonMenuEnabled: false,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          headerShown: true,
          headerTitle: props => <Header />,
          headerStyle: styles.headerStyle,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="FriendRequests"
        component={FriendRequests}
        options={{
          headerShown: true,
          headerTitle: props => <Header />,
          headerStyle: styles.headerStyle,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen name="Chatroom" component={Chatroom} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#1d4ed8',
    height: 45,
  },
});
