import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';

type Props = {
  navigation: any;
};

const {width} = Dimensions.get('screen');

const TextChatView = ({navigation}: Props) => {
  const navigateToChatroom = () => {
    navigation.navigate('Chatroom');
  };
  return (
    <TouchableOpacity
      style={styles.textChatContainer}
      onPress={navigateToChatroom}>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={{flex: 4}}>
        <Text style={styles.heading}>Zain Saleem</Text>
        <Text style={styles.message}>Hi ther this is my first message!</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingRight: 5,
        }}>
        <Text style={{color: 'grey'}}>19:04 am</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TextChatView;

const styles = StyleSheet.create({
  textChatContainer: {
    width,
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  image: {height: 45, width: 45, borderRadius: 50},
  heading: {color: 'black', fontWeight: 'bold'},
  message: {color: 'black'},
});
