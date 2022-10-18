import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextChatView} from '../Components';
import {getAllConversations} from '../Api/userApis';
import {Button} from 'react-native-paper';
import {getChats} from '../Api/chatroomApi';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store/store';

type Props = {navigation: any};

const TextChat = ({navigation}: Props) => {
  const me = useSelector((state: RootState) => state.me.value);
  const [chatrooms, setChatrooms] = useState([]);

  const [conversations, setConversations] = useState<any[]>([]);
  console.log('Convo:', conversations);
  useEffect(() => {
    getChats(me._id)
      .then(res => {
        console.log('RES', res);
        if (res?.success) {
          setChatrooms(res?.chatrooms);
        } else {
          Alert.alert('Failed to retrieve chats');
        }
      })
      .catch(() => {
        Alert.alert('Failed to retrieve chats');
      });
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      <Button
        onPress={() => navigation.navigate('SelectChat')}
        color="white"
        style={{backgroundColor: 'blue', width: '80%', marginTop: 10}}>
        New Conversation
      </Button>
      <ScrollView>
        {chatrooms.map((chatroom, index) => (
          <TextChatView navigation={navigation} />
        ))}
        {
          //Populate the chatroom with participants
          conversations.map((convo, item) => (
            <TextChatView navigation={navigation} />
          ))
        }
      </ScrollView>
    </View>
  );
};

export default TextChat;

const styles = StyleSheet.create({});
