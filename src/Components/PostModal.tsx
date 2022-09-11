import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const PostModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      Hello
    </Modal>
  );
};

export default PostModal;

const styles = StyleSheet.create({});
