import React, {useState} from 'react';
import {
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  //   TextInput,
  Text,
  Alert,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
// import { Icon} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import CommentComponent from '../Components/CommentComponent';
import {useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {newComment} from '../Api/postApis';
import {RootState} from '../Redux/store/store';

const image = require('../Assets/goku.png');
const width = Dimensions.get('screen').width;

const ViewPostScreen = ({navigation, route}: any) => {
  const [commentBody, setCommentBody] = useState('');
  const {Icon} = TextInput;
  const me = useSelector((state: RootState) => state.me.value);

  const publishComment = () => {
    if (commentBody.length > 0) {
      newComment(me.firstName, commentBody, me.profilePic);
    } else {
      Alert.alert('Failed', 'Comment too short');
    }
  };
  const {selectedPost} = route.params;
  console.log('Comments: ', selectedPost.comments);
  return (
    <View style={styles.viewPostContainer}>
      <View style={styles.postContainer}>
        <Text style={{padding: 10, fontSize: 16, color: 'black'}}>
          {selectedPost.postBody}
        </Text>
        <View
          style={{width: '100%', height: 1, backgroundColor: 'lightgrey'}}
        />
        <View style={styles.optionsBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Image
                source={{uri: selectedPost.creatorImage}}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  backgroundColor: 'black',
                  marginRight: width * 0.02,
                }}
              />
            </View>
            <Text style={{fontWeight: 'bold'}}>{selectedPost.creatorName}</Text>
          </View>
        </View>
        <View
          style={{width: '100%', height: 1, backgroundColor: 'lightgrey'}}
        />
      </View>
      <ScrollView style={styles.commentContainer}>
        {selectedPost.comments.map(comment => (
          <CommentComponent commentBody={comment.commentBody} />
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          value={commentBody}
          onChangeText={text => setCommentBody(text)}
          style={styles.msgInput}
          placeholder={'Please enter your comment'}
        />
        <Button
          onPress={() => {
            publishComment();
            setCommentBody('');
          }}
          style={{backgroundColor: '#1d4ed8', margin: 10}}>
          <FontAwesome5Icon name="paper-plane" color="white" size={20} />
        </Button>
      </View>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          onChangeText={text => setCommentBody(text)}
          value={commentBody}
          style={{
            width: '85%',
            height: 60,
            padding: 10,
            color: 'black',
            fontSize: 16,
          }}
          placeholder="Whatdo you think"
          selectionColor={'orange'}
        />
        <TouchableOpacity onPress={publishComment}>
          <FontAwesome5 name="share" />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default ViewPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    backgroundColor: 'white',
  },
  viewPostContainer: {
    flex: 1,
    width,
  },
  optionsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: width * 0.02,
    paddingHorizontal: width * 0.04,
  },
  commentContainer: {
    padding: 10,
  },
  postContainer: {
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  msgInput: {height: 40, width: '70%'},
});
