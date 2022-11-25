import { AtomindText } from '@/Components'
import React, { useState,useRef } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import { RNCamera } from 'react-native-camera'

const QRScanner = ({ modalVisible, setModalVisible }) => {
    const camera = useRef()
  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AtomindText style={styles.modalText}>Scan Address</AtomindText>

            <RNCamera
              ref={camera}
              style={{
                flex: 1,
                width: '100%',
              }}
            ></RNCamera>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22
  },
  modalView: {
    margin: 20,

    backgroundColor: 'white',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    shadowColor: '#000',
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
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
})

export default QRScanner
