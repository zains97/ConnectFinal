import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import image from '../Assets/goku.png';

const {width} = Dimensions.get('screen');

const CommentComponent = ({commentBody}: any) => {
  return (
    <View style={{flexDirection: 'row', width: '100%'}}>
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
      </View>
      <View
        style={{
          marginVertical: 20,
          backgroundColor: '#60a5fa',
          paddingVertical: 10,
          paddingRight: 5,
          paddingLeft: 10,
          //   borderRadius: 5,
          marginTop: 5,
          marginLeft: '5%',
          alignSelf: 'flex-start',
          borderRadius: 20,
          width: '80%',
        }}>
        <Text style={{fontSize: 16, color: '#fff', justifyContent: 'center'}}>
          {commentBody}
        </Text>
        <Text style={{color: 'black', fontWeight: '900'}}>Zain Saleem</Text>
        <View style={styles.leftArrow}></View>
        <View style={styles.leftArrowOverlap}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  leftArrow: {
    position: 'absolute',
    backgroundColor: '#60a5fa',
    width: 20,
    height: 25,
    top: 0,
    borderTopRightRadius: 25,
    left: -10,
  },

  leftArrowOverlap: {
    position: 'absolute',
    backgroundColor: 'white',
    //backgroundColor:"green",
    width: 20,
    height: 35,
    top: -6,
    borderTopRightRadius: 18,
    left: -20,
  },
});

export default CommentComponent;
