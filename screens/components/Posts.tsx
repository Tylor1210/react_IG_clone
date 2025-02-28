//Import React and style from react-native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


//Interface (typescript) defines the shape of the props that Post component will receive. 
//This case we expect 3 "props"
interface PostProps {
    username: string;
    image: string;
    caption: string;
}

const Post: React.FC<PostProps> = ({ username, image, caption }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.username}>{username}</Text>
        <Image source={{ uri: image }} style={styles.postImage} />
        <Text style={styles.caption}>{caption}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    username: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
    },
    postImage: {
      width: '100%',
      height: 250,
      borderRadius: 10,
      marginBottom: 5,
    },
    caption: {
      fontSize: 14,
      color: '#333',
    },
  });
  
  export default Post;