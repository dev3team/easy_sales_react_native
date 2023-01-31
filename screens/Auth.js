import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import {getStorageValue, setStorageValue} from '../utills/localStorage';
import settings from '../config/default';

let theme;

// const setTheme = async () => {
//     const setSaveTheme = await getStorageValue('theme');
//     theme = setSaveTheme !== null ? setSaveTheme : 'dark';
//     console.log(theme);
// };
  
// setTheme();

export default function Auth({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={[
            styles.container,
            {
              backgroundColor: theme
                ? settings.app.theme[theme].backgroundColor
                : settings.app.theme.light.backgroundColor,
            },
        ]}>

            <View style={[
                styles.inputView,
                {
                    backgroundColor: theme
                    ? settings.app.theme[theme].inputBgColor
                    : settings.app.theme.light.inputBgColor,
                },
            ]}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={[
                styles.inputView,
                {
                    backgroundColor: theme
                    ? settings.app.theme[theme].inputBgColor
                    : settings.app.theme.light.inputBgColor,
                },
            ]}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={[
                    styles.forgotButton,
                        {
                        color: theme
                            ? settings.app.theme[theme].textColor
                            : settings.app.theme.light.textColor,
                        },
                ]}
                onPress={() => navigation.navigate('Register')}
                >
                Create new account.
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[
                styles.loginBtn,
                    {
                        backgroundColor: theme
                        ? settings.app.theme[theme].buttonBgColor
                        : settings.app.theme.light.buttonBgColor,
                    },
                ]}
                // onPress={buttonClickHandler}
                >
                <Text style={[
                    styles.loginText,
                    {
                    color: theme
                        ? settings.app.theme[theme].buttonTextColor
                        : settings.app.theme.light.buttonTextColor,
                    },
                ]}>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    image: {
      marginBottom: 40,
    },
  
    inputView: {
      borderRadius: 30,
      width: '70%',
      height: 45,
      marginBottom: 20,
      alignItems: 'center',
    },
  
    textInput: {
      height: 50,
      flex: 1,
      padding: 10,
    },
  
    forgotButton: {
      height: 30,
      marginBottom: 15,
    },
    loginBtn: {
      width: '80%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },
  });