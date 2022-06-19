import {
  Modal,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {sendFriendRequest} from '../Api/friendsApi';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store/store';
import {storeMe} from '../Utilities/StoreMe';
import {useDispatch} from 'react-redux';
import {updateMeState} from '../Redux/slices/MeSlice';

interface Props {
  modalVisible: boolean;
  setModalVisible: any;
  user: any;
}

const {width} = Dimensions.get('screen');
const OtherProfileModal = ({modalVisible, setModalVisible, user}: Props) => {
  const me = useSelector((state: RootState) => state.me.me);
  const dispatch = useDispatch();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.modalPress}
            onPress={async () => {
              await sendFriendRequest(me.user, user._id);

              me.user.sentFriendRequests = [
                ...me.user.sentFriendRequests,
                user._id,
              ];

              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Send Friend Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalPressWarning}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Close Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalPressWarning}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Block User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default OtherProfileModal;
const styles = StyleSheet.create({
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
    padding: 25,
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

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalPress: {
    padding: 10,
    width: width * 0.5,
    borderRadius: 5,
    backgroundColor: '#3b82f6',
    marginVertical: 10,
  },

  modalPressWarning: {
    padding: 10,
    width: width * 0.5,
    borderRadius: 5,
    backgroundColor: '#f43f5e',
    marginVertical: 10,
  },
});
