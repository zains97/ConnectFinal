import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store/store';
import {getLocation} from '../Utilities/Permissions';

export default function App({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLocation, setcurrentLocation] = useState({
    latitude: 24.8607,
    longitude: 67.0961,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  });
  const [myLocation, setMyLocation] = useState({
    latitude: 24.8607,
    longitude: 67.0961,
  });
  const me = useSelector((state: RootState) => state.me.me);
  useEffect(() => {
    getLocation(setMyLocation);
    console.log('Coordinates: ', myLocation);
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={currentLocation}>
        <Marker
          coordinate={myLocation}
          onPress={() => setModalVisible(!modalVisible)}>
          <View
            style={{
              borderRadius: 50,
              height: 40,
              width: 40,
              borderColor: 'red',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
              }}
              style={{height: 38, width: 38, borderRadius: 50}}
            />
          </View>
        </Marker>
      </MapView>
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{
              uri: me.user.profilePic,
            }}
            style={{height: 40, width: 40, borderRadius: 50}}
          />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
                }}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
              <View>
                <Text style={styles.modalText}>Zain Saleem</Text>
                <Text style={styles.kmText}>120km away</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  topHeader: {
    position: 'absolute',
    width: '100%',
    left: 15,
    top: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
  kmText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
  },
});
