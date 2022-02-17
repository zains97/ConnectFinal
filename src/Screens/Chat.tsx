import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const Chat = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
