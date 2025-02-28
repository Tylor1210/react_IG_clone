// AddPostScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

function AddPostScreen({ navigation }: any) {
  const [caption, setCaption] = useState('');
  const [imageUri, setImageUri] = useState('');

  const handlePost = () => {
    // For now, we're just printing the data, but this will be handled with state later
    console.log('New Post:', caption, imageUri);
    // Navigate back after posting
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter caption"
        value={caption}
        onChangeText={setCaption}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Image URL"
        value={imageUri}
        onChangeText={setImageUri}
      />
      {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : null}
      <Button title="Post" onPress={handlePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});

export default AddPostScreen;
