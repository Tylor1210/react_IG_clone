import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';

const posts = [
  {
    id: '1',
    username: 'user_1',
    image: 'https://placekitten.com/200/200',
    caption: 'This is my first post!',
  },
  {
    id: '2',
    username: 'user_2',
    image: 'https://placekitten.com/200/200',
    caption: 'Enjoying the day!',
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
          <View style={styles.postContainer}>
            <Text style={styles.username}>{item.username}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

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
