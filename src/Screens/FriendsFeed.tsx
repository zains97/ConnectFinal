import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import React from 'react';
import {getAllPosts, getFriendsPosts} from '../Api/postApis';
import {IPost} from '../Interfaces/PostInterfaces';
import {
  ActivityIndicator,
  Avatar,
  Button,
  Card,
  Paragraph,
  Text,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../Redux/store/store';

const FriendsFeed = ({navigation}: any) => {
  //Component start
  const dispatch = useDispatch();
  const me = useSelector((state: RootState) => state.me.value);

  const LeftContent = (image: any, userId: string) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('OtherProfile', {userId}); //Add props for navigation UserID
      }}>
      <Avatar.Image size={40} source={{uri: image}} />
    </TouchableOpacity>
  );

  const defaultPosts: IPost[] = [];

  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] =
    React.useState(defaultPosts);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    getFriendsPosts(me.friendsId)
      .then(response => {
        setPosts(response);
        setLoading(false);
      })
      .catch(ex => {
        const error =
          ex.response.status === 404
            ? 'Resource Not found'
            : 'An unexpected error has occurred';
        setError(error);
        setLoading(false);
      });
  }, []);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getFriendsPosts(me.friendsId)
      .then(response => {
        setPosts(response);
        setRefreshing(false);
      })
      .catch(ex => {
        const error =
          ex.response.status === 404
            ? 'Resource Not found'
            : 'An unexpected error has occurred';
        setError(error);
        setRefreshing(false);
      });
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator color="#1d4ed8" />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              colors={['blue']}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          style={{margin: 20}}
          data={posts}
          renderItem={({item}) => (
            <Card style={{marginVertical: 5}}>
              <Card.Title
                title={item.creatorName}
                subtitle={item.createDate.toString()}
                left={() => LeftContent(item.creatorImage, item.creator)}
                titleStyle={{fontSize: 16}}
              />

              {item.postImage == undefined || item.postImage == 'no' ? null : (
                <Card.Cover
                  source={{uri: `data:image/jpeg;base64,${item.postImage}`}}
                />
              )}
              <Card.Content>
                <Paragraph>{item.postBody}</Paragraph>
              </Card.Content>

              <Card.Actions>
                <Button
                  onPress={() => {
                    console.log('like');
                  }}>
                  <MaterialCommunityIcons
                    name="thumb-up-outline"
                    color="#1d4ed8"
                    size={22}
                  />
                </Button>
                <Button
                  onPress={() => {
                    navigation.navigate('ViewPost');
                  }}
                  color="#1d4ed8">
                  Comments
                </Button>
              </Card.Actions>
            </Card>
          )}
        />
      )}
    </View>
  );
};

export default FriendsFeed;

const styles = StyleSheet.create({});
