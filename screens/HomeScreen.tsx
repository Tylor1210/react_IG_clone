import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import Posts from './components/Posts';

// Array of post objects, each containing an id, username, image URL, and caption 
const posts = [
  {
    id: '1',
    username: 'user_1',
    image: 'https://picsum.photos/200/200',
    caption: 'This is my first post! #reflection #nopunintended',
  },
  {
    id: '2',
    username: 'user_2',
    image: 'https://picsum.photos/200/200',
    caption: 'Enjoying the day!!',
  },
  {
    id: '3',
    username: 'user_3',
    image: 'https://picsum.photos/200/200',
    caption: 'Enjoying the day!!',
  },
  // Add more posts as needed
];

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />

      {/* Render the posts */}
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Posts username={item.username} image={item.image} caption={item.caption}/>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
// Styling 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  caption: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;
