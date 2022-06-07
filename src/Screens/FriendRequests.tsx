import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FriendRequest} from '../Components';
import {getFriendRequests} from '../Api/friendsApi';
import {RootState} from '../Redux/store/store';
import {useSelector} from 'react-redux';
import {IFriendRequest} from '../Interfaces/UserInterface';

type Props = {};

const FriendRequests = (props: Props) => {
  const me = useSelector((state: RootState) => state.me.me);
  const [friendRequests, setfriendRequests] = useState([]);
  console.log('MY FRIEND REQUEST STATE:   ', friendRequests);
  useEffect(() => {
    getFriendRequests(me.user._id).then(res => {
      setfriendRequests(res);
    });
  }, []);

  return (
    <View>
      {friendRequests.map((friendRequest: IFriendRequest) => (
        <FriendRequest
          name={friendRequest.requester.name}
          profilePic={friendRequest.requester.profilePic}
        />
      ))}
    </View>
  );
};

export default FriendRequests;

const styles = StyleSheet.create({});
