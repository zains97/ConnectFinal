import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Chat, Maps, Profile, Publish} from './src/Screens/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

type Props = {};
const BottomTab = createBottomTabNavigator();

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        backBehavior="history"
        screenOptions={{headerTitle: 'Connect'}}>
        <BottomTab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <BottomTab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome5Icons name="user-alt" color={color} size={26} />
            ),
          }}
          name="Profile"
          component={Profile}
        />
        <BottomTab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={32}
              />
            ),
          }}
          name="Publish"
          component={Publish}
        />
        <BottomTab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="message" color={color} size={26} />
            ),
          }}
          name="Chat"
          component={Chat}
        />
        <BottomTab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="google-maps"
                color={color}
                size={30}
              />
            ),
          }}
          name="Maps"
          component={Maps}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
