import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {};

const FriendRequest = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          source={{
            uri: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.name}>Zain Saleem</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonBlue}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRed}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FriendRequest;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  info: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {height: 40, width: 40, borderRadius: 50, marginHorizontal: 10},
  name: {fontSize: 16, fontWeight: '900', color: 'black'},
  buttonBlue: {
    backgroundColor: '#22c55e',
    height: 30,
    marginHorizontal: 5,
    fontSize: 10,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonRed: {
    backgroundColor: '#ef4444',
    height: 30,
    marginHorizontal: 10,
    fontSize: 10,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
