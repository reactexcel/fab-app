import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DocumentPicker from 'react-native-document-picker'; // Make sure to import DocumentPicker
import colors from '../styles/colors';

function Upload() {
  const uploadImageHandler = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      console.log('Picked document:', doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Document picking cancelled');
      } else {
        console.log('Error picking document:', err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imagePickerButton}
        onPress={uploadImageHandler}>
        <Text style={{color: colors.black}}>Upload Image</Text>
      </TouchableOpacity>

      <View style={{marginTop: 10}}>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              color: 'black',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 30,
    borderRadius: 5,
  },
  imagePickerButton: {
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  selectedImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: colors.orange,
    width: '100%',
    padding: 10,
    borderRadius: 20,
  },
});

export default Upload;
