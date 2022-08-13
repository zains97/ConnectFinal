import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {ITags} from '../Interfaces/PostInterfaces';
import {newPost} from '../Api/postApis';
import {RootState} from '../Redux/store/store';
import {useSelector} from 'react-redux';

interface Props {
  navigation: {jumpTo: any};
}

const Publish = ({navigation}: Props) => {
  const me = useSelector((state: RootState) => state.me.value);

  const {width} = Dimensions.get('screen');
  const tags: ITags[] = [
    {
      id: 0,
      name: 'General',
    },
    {
      id: 1,
      name: 'Football',
    },
    {
      id: 2,
      name: 'Sports',
    },
    {
      id: 3,
      name: 'Programming',
    },
    {
      id: 4,
      name: 'Cricket',
    },
    {
      id: 5,
      name: 'Cooking',
    },
    {
      id: 6,
      name: 'Marital Arts',
    },
    {
      id: 7,
      name: 'Tech',
    },
    {
      id: 8,
      name: 'Science',
    },
    {
      id: 9,
      name: 'Religion',
    },
    {
      id: 10,
      name: 'Islam',
    },
    {
      id: 11,
      name: 'Health',
    },
    {
      id: 12,
      name: 'Fitness',
    },
    {
      id: 13,
      name: 'Weapons',
    },
    {
      id: 14,
      name: 'Politics',
    },
    {
      id: 15,
      name: 'Econimics',
    },
    {
      id: 16,
      name: 'Gaming',
    },
    {
      id: 17,
      name: 'Philosophy',
    },
  ];

  const [postBody, setPostBody] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>(['']);
  console.log('(PUBLISH) : Selected Tags :' + selectedTags);
  const publishPost = () => {
    if (postBody.length < 10) {
      Alert.alert('Post must be more than 10 characters long.');
    } else {
      if (selectedTags.length > 0) {
        newPost(postBody, selectedTags, me._id, me.profilePic, me.firstName);
        setTimeout(() => navigation.jumpTo('Home'), 2000);
      } else {
        Alert.alert('You must select a tag.');
      }
    }
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flex: 0.875}}>
        <View style={{marginBottom: 5, justifyContent: 'center'}}>
          <TextInput
            onChangeText={text => setPostBody(text)}
            value={postBody}
            style={{
              width: '100%',
              height: 60,
              padding: 10,
              color: 'black',
              fontSize: 16,
            }}
            placeholder="What's on your mind"
            selectionColor={'orange'}
          />
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: me.profilePic}}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: 'black',
              }}
              resizeMode="cover"
            />
            <Text style={{color: 'black', fontSize: 16, left: 10}}>
              {me.firstName}
            </Text>
          </View>
          <View
            style={{width: '100%', height: 1, backgroundColor: 'lightgrey'}}
          />
          <ScrollView horizontal={true}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                flexDirection: 'row',
              }}>
              {tags.map((data, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.6}
                  onPress={() => {
                    if (!selectedTags.includes(data.name)) {
                      setSelectedTags([...selectedTags, data.name]);
                    } else {
                      setSelectedTags(
                        selectedTags.filter(tag => tag != data.name),
                      );
                    }
                  }}>
                  <View
                    style={{
                      padding: 6,
                      borderRadius: 5,
                      backgroundColor: '#3b82f6',
                      marginHorizontal: 5,
                      borderWidth: 3,
                      borderColor: selectedTags.includes(data.name)
                        ? '#1d4ed8'
                        : '#3b82f6',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: selectedTags.includes(data.name) ? 18 : 16,
                        fontWeight: selectedTags.includes(data.name)
                          ? 'bold'
                          : 'normal',
                      }}>
                      {data.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              publishPost();
            }}
            style={{
              width: width * 0.5,
              padding: 6,
              borderRadius: 5,
              backgroundColor: '#3b82f6',
              marginHorizontal: 5,
              marginVertical: 5,
              borderWidth: 2,
              borderColor: '#1e40af',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Upload Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              publishPost();
            }}
            style={{
              width: width * 0.5,
              padding: 6,
              borderRadius: 5,
              backgroundColor: '#3b82f6',
              marginHorizontal: 5,
              marginVertical: 5,
              borderWidth: 2,
              borderColor: '#1e40af',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Publish Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Publish;
