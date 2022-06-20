import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getUser} from '../Api/userApis';
import OtherProfileModal from '../Components/OtherProfileModal';
import {IUser} from '../Interfaces/UserInterface';

interface Props {
  route: {params: {userId: string}};
  navigation: object;
  userId: string;
}
const OtherProfile = ({route, navigation, userId}: Props) => {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    getUser(route.params.userId).then(res => {
      setUser(res);
    });
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const {width} = Dimensions.get('screen');
  return (
    <>
      <ImageBackground
        source={{uri: user?.profilePic}}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000c0',
        }}
        imageStyle={{opacity: 0.2}}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            paddingRight: width * 0.05,
            marginVertical: width * 0.05,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width,
          }}>
          <FontAwesome5 size={20} name="ellipsis-v" color={'white'} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <OtherProfileModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            userId={user?._id}
          />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 300,
              width: 300,
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              backgroundColor: 'black',
            }}>
            <Image
              source={{uri: user?.profilePic}}
              resizeMode="contain"
              style={{width: 250, height: 250}}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{color: 'white', fontSize: 24}}>
              {user?.firstName} {user?.lastName}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                width: 130,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'dotted',
                borderColor: 'white',
                borderRadius: 10,
                margin: 15,
              }}>
              <Text style={{color: 'white', fontSize: 24}}>10</Text>
              <Text style={{color: 'white', fontSize: 24}}>POSTS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                width: 130,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'dotted',
                borderColor: 'white',
                borderRadius: 10,
                margin: 15,
              }}>
              <Text style={{color: 'white', fontSize: 24}}>20</Text>
              <Text style={{color: 'white', fontSize: 24}}>FRIENDS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default OtherProfile;
