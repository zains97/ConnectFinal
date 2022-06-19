import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, TextInput, TouchableRipple} from 'react-native-paper';
import logo from '../Assets/modifiedConnectLogo.png';
import DatePicker from 'react-native-date-picker';
import {ITags} from '../Interfaces/PostInterfaces';

type Props = {
  navigation: any;
};
const {width} = Dimensions.get('screen');

const SignUp2 = ({navigation}: Props) => {
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
            Select Image:{' '}
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
        <View>
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
                    } else {
                      removeItemOnce(tag, data.name);
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
        </View>
        <Button
          mode="contained"
          style={styles.signUpButton}
          onPress={() => {
            navigation.navigate('SignUp2');
          }}>
          Sign Up
        </Button>
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
