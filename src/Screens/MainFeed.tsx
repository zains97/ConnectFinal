import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import pic from '../Assets/goku.png';

type Props = {};

const MainFeed = (props: Props) => {
  const data = ['Zain', 'Ahmed'];

  return (
    <View>
      <FlatList
        style={{margin: 20}}
        data={data}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'yellow', margin: 10}}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MainFeed;

const styles = StyleSheet.create({});
