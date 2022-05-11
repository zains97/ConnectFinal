import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FriendRequest} from '../Components';

type Props = {};

const FriendRequests = (props: Props) => {
  return (
    <View>
      <FriendRequest />
      <FriendRequest />
      <FriendRequest />
    </View>
  );
};

export default FriendRequests;

const styles = StyleSheet.create({});
