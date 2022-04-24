import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store/store';

export default function App({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLocation, setcurrentLocation] = useState({
    latitude: 24.8607,
    longitude: 67.0961,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  });
  const me = useSelector((state: RootState) => state.me.me);
  useEffect(() => {
    console.log('Hello');
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={currentLocation}>
        <Marker
          coordinate={currentLocation}
          onPress={() => setModalVisible(!modalVisible)}
        />
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
              <Text style={styles.modalText}>Zain Saleem</Text>
            </View>
            <Text style={styles.modalText}>120km away</Text>
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
    padding: 35,
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
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
});
