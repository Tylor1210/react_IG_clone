//Headers
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function LoginScreen({ navigation }: any ) {
    //declare Variables
    const [username, setUsername] = useState('');
    //handle login
    const handleLogin = () => {
        //Authenticate and navigate
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter Username"
            value={username}
            onChangeText={setUsername}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      );
    }


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
        },
        input: {
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: 20,
          paddingLeft: 10,
        },
      });
      
      export default LoginScreen;
