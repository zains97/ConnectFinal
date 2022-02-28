import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Splash, MainApp, AuthStack} from './src/Screens';
import {Provider as PaperProvider} from 'react-native-paper';

type Props = {};

const App = (props: Props) => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
