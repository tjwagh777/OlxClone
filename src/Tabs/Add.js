import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {addPost} from '../redux/PostSlice';

const Add = ({onPost}) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState({
    assets: [
      {
        fileName: '',
        fileSize: '',
        height: '',
        type: 'image/jpeg',
        uri: '',
        width: '',
      },
    ],
  });
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        openCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if (!result.didCancel) {
      setPhoto(result);
    }
  };

  const addItem = () => {
    dispatch(
      addPost({
        name: name,
        desc: desc,
        price: price,
        image: photo.assets[0].uri,
      }),
    );
    onPost();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Post</Text>
      </View>
      <TouchableOpacity
        style={styles.imageview}
        onPress={() => {
          requestCameraPermission();
        }}>
        {photo.assets[0].uri == '' ? (
          <Image
            source={require('../Images/placeholder.png')}
            style={styles.imageview}
          />
        ) : (
          <Image source={{uri: photo.assets[0].uri}} style={styles.imageview} />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Enter Item Name"
        style={styles.input}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Enter Item Desc"
        style={[styles.input, {marginTop: 10}]}
        value={desc}
        onChangeText={txt => setDesc(txt)}
      />
      <TextInput
        placeholder="Enter Item Price"
        keyboardType="numeric"
        style={[styles.input, {marginTop: 10}]}
        value={price}
        onChangeText={txt => setPrice(txt)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addItem();
        }}>
        <Text style={{color: '#FFF', fontSize: 18}}>Post my Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  imageview: {
    width: '90%',
    height: 130,
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    paddingLeft: 20,
  },
  button: {
    width: '90%',
    height: 55,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
