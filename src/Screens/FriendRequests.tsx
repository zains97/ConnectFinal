import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {FriendRequest} from '../Components';
import {getFriendRequests} from '../Api/friendsApi';
import {RootState} from '../Redux/store/store';
import {useSelector} from 'react-redux';

type Props = {};

const FriendRequests = (props: Props) => {
  const me = useSelector((state: RootState) => state.me.me);
  console.log(me);
  useEffect(() => {
    getFriendRequests(me.user._id).then(res => {
      console.log(res);
    });
  }, []);

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
