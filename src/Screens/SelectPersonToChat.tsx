import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

type Props = {};

const PersonView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          source={{
            uri: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg' as any,
          }}
          style={styles.image}
        />
        <Text style={styles.name}>Zain Saleem</Text>
      </View>
    </View>
  );
};

const SelectPersonToChat = (props: Props) => {
  return (
    <View>
      <PersonView />
    </View>
  );
};

export default SelectPersonToChat;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  info: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },

  image: {height: 40, width: 40, borderRadius: 50, marginHorizontal: 10},
  name: {fontSize: 16, fontWeight: '900', color: 'black'},
});
