import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Button, TextInput} from 'react-native-paper';
import {io} from 'socket.io-client';

type Props = {};

const SERVER = 'http://192.168.0.106:4050';
const {width} = Dimensions.get('screen');

const messages = [
  {id: 1, body: 'Hi there from zain.', sender: 'Me'},
  {id: 2, body: 'Hi there from Ahsan.', sender: 'Other'},
  {id: 3, body: 'Hi there from zain.', sender: 'Me'},
  {id: 4, body: 'Hi there from Ahsan.', sender: 'Other'},
  {id: 5, body: 'Hi there from Ahsan.', sender: 'Me'},
  {id: 6, body: 'Hi there from Ahsan.', sender: 'Other'},
  {id: 7, body: 'Hi there from Ahsan.', sender: 'Me'},
  {id: 8, body: 'Hi there from Ahsan.', sender: 'Other'},
  {id: 9, body: 'Hi there from Ahsan.', sender: 'Me'},
  {id: 10, body: 'Hi there from Ahsan.', sender: 'Other'},
  {id: 11, body: 'Hi there from Ahsan.', sender: 'Me'},
  {id: 12, body: 'Hi there from Ahsan.', sender: 'Other'},
  {
    id: 13,
    body: 'Hi there from Ahsan. there from Ahsan. there from Ahsan. there from Ahsan.',
    sender: 'Me',
  },
  {
    id: 14,
    body: 'Hi there from Ahsan. there from Ahsan. there from Ahsan. there from Ahsan.',

    sender: 'Other',
  },
  {id: 15, body: 'Hi there from Ahsan.', sender: 'Me'},
  {id: 16, body: 'Hi there from Ahsan.', sender: 'Other'},
  {id: 17, body: 'Hi there from Ahsan.', sender: 'Me'},
  {id: 18, body: 'Hi there from Ahsan.', sender: 'Other'},
  {id: 19, body: 'Hi there from Ahsan.', sender: 'Me'},
];

const Chatroom = (props: Props) => {
  let socket = io(SERVER);
  return (
    <View style={styles.chatRoomContainer}>
      <View style={styles.chatRoomHeader}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.headerNameContainer}>
          <Text style={styles.headerName}>Zain Saleem</Text>
        </View>
        <View style={styles.headerIconsContainer}>
          <FontAwesome5Icon size={20} name="phone" color={'white'} />
          <FontAwesome5Icon size={20} name="video" color={'white'} />
          <FontAwesome5Icon size={20} name="ellipsis-v" color={'white'} />
        </View>
      </View>
      <View style={styles.chatRoomBody}>
        <FlatList
          inverted
          style={{backgroundColor: '#eeeeee'}}
          data={messages}
          renderItem={({item, index}) => {
            if (item.sender == 'Me') {
              return (
                <View
                  style={{
                    backgroundColor: '#0078fe',
                    padding: 10,
                    marginTop: 5,
                    marginRight: '5%',
                    maxWidth: '70%',
                    alignSelf: 'flex-end',
                    borderRadius: 20,
                    marginBottom: 1,
                  }}
                  key={index}>
                  <Text style={{fontSize: 16, color: '#fff'}} key={index}>
                    {item.body}
                  </Text>

                  <View style={styles.rightArrow}></View>
                  <View style={styles.rightArrowOverlap}></View>
                </View>
              );
            } else {
              return (
                <View
                  style={{
                    backgroundColor: '#dedede',
                    padding: 10,
                    marginTop: 5,
                    marginLeft: '5%',
                    maxWidth: '70%',
                    alignSelf: 'flex-start',
                    borderRadius: 20,
                    marginBottom: 1,
                  }}
                  key={index}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#000',
                      justifyContent: 'center',
                    }}
                    key={index}>
                    {' '}
                    {item.body}
                  </Text>
                  <View style={styles.leftArrow}></View>
                  <View style={styles.leftArrowOverlap}></View>
                </View>
              );
            }
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.msgInput} placeholder={'Chat away!'} />
        <Button style={{backgroundColor: '#1d4ed8', margin: 10}}>
          <FontAwesome5Icon name="paper-plane" color="white" size={20} />
        </Button>
      </View>
    </View>
  );
};

export default Chatroom;

const styles = StyleSheet.create({
  chatRoomContainer: {width, flex: 1},
  chatRoomHeader: {flex: 0.8, flexDirection: 'row', backgroundColor: '#1d4ed8'},
  headerNameContainer: {flex: 2.9, justifyContent: 'center'},
  headerName: {color: 'white', fontWeight: 'bold', fontSize: 18},
  headerIconsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 2,
  },
  chatRoomBody: {flex: 9.2, paddingTop: 5},
  image: {height: 45, width: 45, borderRadius: 50},
  imageContainer: {flex: 1.1, justifyContent: 'center', alignItems: 'center'},
  rightArrow: {
    position: 'absolute',
    backgroundColor: '#0078fe',
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },

  rightArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eeeeee',
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },

  /*Arrow head for recevied messages*/
  leftArrow: {
    position: 'absolute',
    backgroundColor: '#dedede',
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },

  leftArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eeeeee',
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  msgInput: {height: 40, width: '70%'},
});
