/* eslint-disable */
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [imageSource, setImageSource] = useState(undefined);
  const options = {
    includeBase64 : true,
  };

  const showCamera = () => {
    launchCamera(options, response => {
      console.log('LaunchCamera : ', response.assets[0].base64);
      setImageSource(response.assets[0].uri);
    });
  };

  const showCameraRoll = () => {
    launchImageLibrary(options, response => {
      console.log('LaunchImageLibrary : ', response.assets[0].base64);
      setImageSource(response.assets[0].uri);
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor : "gray"}}>
      {imageSource && (
        <Image
          style={{width: 300, height: 300, borderRadius: 8}}
          source={{uri: imageSource}}
        />
      )}
      <TouchableOpacity
        onPress={showCamera}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          borderColor: '#cccccc',
          padding: 8,
          marginTop: 16,
          backgroundColor : "white"
        }}>
        <Text>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={showCameraRoll}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          borderColor: '#cccccc',
          padding: 8,
          backgroundColor : "white",
          marginTop: 16,
        }}>
        <Text>Show Camera Roll</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
