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
} from 'react-native';
import {TextInput} from 'react-native-paper';
// import { Icon} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import CommentComponent from '../Components/CommentComponent';
import {useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {newComment} from '../Api/postApis';
import {RootState} from '../Redux/store/store';

const image = require('../Assets/goku.png');
const width = Dimensions.get('screen').width;

const ViewPostScreen = ({navigation}: any) => {
  const [commentBody, setCommentBody] = useState('');
  const {Icon} = TextInput;
  const me = useSelector((state: RootState) => state.me.value);

  const publishComment = () => {
    newComment(me.firstName, commentBody, me.profilePic);
  };

  const selectedPost = useSelector(
    (state: RootState) => state.selectedPost.value,
  );
  return (
    <View style={styles.container}>
      <View style={styles.viewPostContainer}>
        <View style={/*styles.postContainer*/ {}}>
          <Text style={{padding: 10, fontSize: 14}}>
            {selectedPost.postBody}
          </Text>
          <View
            style={{width: '100%', height: 1, backgroundColor: 'lightgrey'}}
          />
          <View style={styles.optionsBar}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Image
                  source={image}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: 'black',
                    marginRight: width * 0.02,
                  }}
                />
                <TouchableOpacity></TouchableOpacity>
              </View>
              <Text style={{fontWeight: 'bold'}}>Zain Saleem</Text>
            </View>

            <FontAwesome5Icon name="thumbs-up" />
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
        <View
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
        </View>
      </View>
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
    flex: 0.88,
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
});
