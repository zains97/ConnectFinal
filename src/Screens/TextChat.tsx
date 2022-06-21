import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextChatView} from '../Components';
import {getAllConversations} from '../Api/userApis';
import {Button} from 'react-native-paper';

type Props = {navigation: any};

const TextChat = ({navigation}: Props) => {
  const [conversations, setConversations] = useState<any[]>([]);
  console.log('Convo:', conversations);
  useEffect(() => {
    getAllConversations().then(res => {
      setConversations(res.conversations);
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
        <TextChatView navigation={navigation} />
        <TextChatView navigation={navigation} />
        <TextChatView navigation={navigation} />

        {conversations.map((convo, item) => (
          <TextChatView navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TextChat;

const styles = StyleSheet.create({});
