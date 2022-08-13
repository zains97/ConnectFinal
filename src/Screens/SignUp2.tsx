import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import logo from '../Assets/modifiedConnectLogo.png';
import {ITags} from '../Interfaces/PostInterfaces';
import Icon from 'react-native-vector-icons/Fontisto';
import {signUpUser} from '../Api/userApis';

const {width} = Dimensions.get('screen');

const genders = [
  {
    id: 1,
    gender: 'male',
  },
  {
    id: 2,
    gender: 'female',
  },
];

const SignUp2 = ({navigation}: any) => {
  const [gender, setGender] = useState<string>('Male');

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

  const [tag, setTag] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function removeItemOnce(arr: string[], value: string) {
    var index = arr.indexOf(value);
    console.log('INDEX: ', index);
    if (index > -1) {
      console.log('Splice: ', arr.splice(index, 0));
      setTag(arr.splice(index, 1));
    }
  }
  console.log(tag);
  return (
    <View style={styles.signUpContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={logo}
          resizeMode="contain"
          style={{height: 100, width: 100}}
        />
        <Text style={styles.logoContainerHeading}>Connect</Text>
      </View>
      <View style={styles.signUpForm}>
        <Text style={styles.signUpFormHeading}>
          Upload Image and Select Interests
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Select Image:
          </Text>
          <Button
            mode="contained"
            style={styles.signUpButton}
            onPress={() => {
              navigation.navigate('Upload Image');
            }}>
            Pick Image
          </Button>
        </View>
        <View style={{height: '45%'}}>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Select Interests{' '}
          </Text>
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
                    if (!tag.includes(data.name)) {
                      setTag([...tag, data.name]);
                      console.log(tag);
                    } else {
                      setTag(tag.filter(item => item != data.name));
                    }
                  }}>
                  <View
                    style={{
                      padding: 6,
                      borderRadius: 5,
                      backgroundColor: '#3b82f6',
                      marginHorizontal: 5,
                      borderWidth: 3,
                      borderColor: tag.includes(data.name)
                        ? '#1d4ed8'
                        : '#3b82f6',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: tag.includes(data.name) ? 18 : 16,
                        fontWeight: tag.includes(data.name) ? 'bold' : 'normal',
                      }}>
                      {data.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <Text
              style={{alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>
              Select gender:
            </Text>
            {genders.map((data, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setGender(data.gender)}
                activeOpacity={0.6}
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: '#3b82f6',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 40,
                  marginHorizontal: 5,
                  borderWidth: 3,
                  borderColor: data.gender === gender ? '#1d4ed8' : '#3b82f6',
                }}>
                <View>
                  <Icon
                    color={'white'}
                    name={data.gender}
                    size={data.gender === gender ? 28 : 24}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <Button
            disabled={isLoading}
            mode="contained"
            style={styles.signUpButton}
            onPress={() => {
              setIsLoading(true);
              signUpUser(
                'Aisha',
                'Ali',
                'aisha@hotmail.com',
                'cdbgbcd',
                gender,
                tag,
              );
              setIsLoading(false);
            }}>
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SignUp2;

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    backgroundColor: '#1d4ed8',
  },
  signUpForm: {
    flex: 0.8,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    display: 'flex',
  },
  logoContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logoContainerHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
  signUpFormHeading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    textAlign: 'center',
  },
  signUpFormText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  textInput: {
    width: width * 0.9,
    height: 40,
    marginTop: 20,
  },
  signUpButton: {
    width: width * 0.4,
    backgroundColor: '#1d4ed8',
    height: 40,
    marginVertical: 20,
    alignSelf: 'center',
  },
  dobButton: {
    flexDirection: 'row',
    width: width * 0.5,
    backgroundColor: '#10b981',
    height: 40,
    marginVertical: 20,
  },
  nameInput: {
    width: width * 0.4,
    height: 40,
    marginTop: 20,
    marginHorizontal: 15,
  },
});
