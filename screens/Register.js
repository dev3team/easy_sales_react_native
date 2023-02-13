import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import settings from '../config/default';
import messaging from '@react-native-firebase/messaging';
import {register} from '../utils/firebase';
import  {setStorageValue, getStorageValue} from '../utils/localStorage';

let theme;

const setTheme = async () => {
    const setSaveTheme = await getStorageValue('theme');
    theme = setSaveTheme !== null ? setSaveTheme : 'dark';
    console.log(theme);
};

setTheme();

export default function Register({navigation}){

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const getToken = async () => {
      const token = await messaging().getToken();
      return token;
    };

    
    const buttonClickHandler = async () => {
        if (email !== '' && password !== '') {
          const res = await register(email, password, username, await getToken());
          // if (res.hasOwnProperty('error') && res.error) {
          //   return false;
          // }
          await setStorageValue('auth', true);
          navigation.navigate('Home');
        } else {
          throw {message: 'fields not full'};
        }
      };
    
    return (
        <View
        style={[
            styles.container,
            {
            backgroundColor: theme
                ? settings.app.theme[theme].backgroundColor
                : settings.app.theme.light.backgroundColor,
            },
        ]}>
            <View
                style={[
                styles.inputView,
                {
                    backgroundColor: theme
                    ? settings.app.theme[theme].inputBgColor
                    : settings.app.theme.light.inputBgColor,
                },
                ]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View
                style={[
                styles.inputView,
                {
                    backgroundColor: theme
                    ? settings.app.theme[theme].inputBgColor
                    : settings.app.theme.light.inputBgColor,
                },
                ]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(username) => setUsername(username)}
                />
            </View>
            <View
                style={[
                styles.inputView,
                {
                    backgroundColor: theme
                    ? settings.app.theme[theme].inputBgColor
                    : settings.app.theme.light.inputBgColor,
                },
                ]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity>
                <Text
                    style={[
                        styles.forgotButton,
                        {
                        color: theme
                            ? settings.app.theme[theme].textColor
                            : settings.app.theme.light.textColor,
                        },
                    ]}
                    onPress={() => navigation.navigate('Auth')}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                styles.loginBtn,
                {
                    backgroundColor: theme
                    ? settings.app.theme[theme].buttonBgColor
                    : settings.app.theme.light.buttonBgColor,
                },
                ]}
                onPress={buttonClickHandler}
                >
                <Text
                    style={[
                        styles.loginText,
                        {
                        color: theme
                            ? settings.app.theme[theme].buttonTextColor
                            : settings.app.theme.light.buttonTextColor,
                        },
                    ]}>
                    Register
                </Text>
            </TouchableOpacity>
        </View>
    )
} 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    image: {
      marginBottom: 40,
    },
  
    inputView: {
      // backgroundColor: '#95fca1',
      borderRadius: 30,
      width: '70%',
      height: 45,
      marginBottom: 20,
  
      alignItems: 'center',
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      // marginLeft: 20,
    },
  
    forgotButton: {
      height: 30,
      marginBottom: 15,
    },
    loginText: {
      // color: '#FFFFFF',
    },
    loginBtn: {
      width: '80%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      // backgroundColor: '#2a8002',
    },
  });