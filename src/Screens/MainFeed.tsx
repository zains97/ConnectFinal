import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {getAllPosts} from '../Api/postApis';
import {IPost} from '../Interfaces/PostInterfaces';
import {
  ActivityIndicator,
  Avatar,
  Button,
  Card,
  Paragraph,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../Redux/store/store';
import {getUser} from '../Api/userApis';
import {storeMe} from '../Utilities/StoreMe';
import {updateMeState} from '../Redux/slices/MeSlice';

type Props = {
  navigation: any;
};
const {width} = Dimensions.get('screen');
const MainFeed = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const me = useSelector((state: RootState) => state.me.me);
  const LeftContent = (image: any, userId: string) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('OtherProfile', {userId}); //Add props for navigation UserID
      }}>
      <Avatar.Image size={40} source={{uri: image}} />
    </TouchableOpacity>
  );

  const updateUser = () => {
    getUser(me.user._id).then(res => {
      let temp = {
        token: me.token,
        user: res,
      };
      storeMe(temp);
      dispatch(updateMeState(temp));
    });
  };

  const defaultPosts: IPost[] = [];

  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] =
    React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] =
    React.useState('');
  const image = true;

  React.useEffect(() => {
    getAllPosts()
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
    updateUser();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="#1d4ed8" />
      ) : (
        <FlatList
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

              {image ? (
                <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
              ) : null}
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
                <Button color="#1d4ed8">Comments</Button>
              </Card.Actions>
            </Card>
          )}
        />
      )}
    </View>
  );
};

export default MainFeed;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignContent: 'center'},
});
