import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }} // Placeholder profile image
        style={styles.profileImage}
      />
      <Text style={styles.username}>User_1</Text>
      <Text style={styles.bio}>Hello, I am an Instagram clone user!</Text>

      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#555',
  },
});

export default ProfileScreen;
