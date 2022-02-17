import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const Publish = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Publish</Text>
    </View>
  );
};

export default Publish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
