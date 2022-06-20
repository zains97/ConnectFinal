import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextChatView} from '../Components';


type Props = {navigation: any};

const TextChat = ({navigation}: Props) => {
  return (
    <ScrollView>
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
      <TextChatView navigation={navigation} />
    </ScrollView>
  );
};

export default TextChat;

const styles = StyleSheet.create({});
