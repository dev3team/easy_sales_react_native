import React, {useState, useEffect} from 'react';
import {
    AppState,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../utils/firebase';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import {getStorageValue, setStorageValue} from '../utils/localStorage';
import { setAppStatus } from '../store';
import settings from '../config/default';
let theme;

const setTheme = async () => {
    const setSaveTheme = await getStorageValue('theme');
    theme = setSaveTheme !== null ? 'light' : 'light';
};
  
setTheme();

export default function Auth({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const appStatus = useSelector(state => state.parsedJobs.appStatus)
    
    PushNotification.configure({
        onNotification: (notification) => {
            if(appStatus !== 'active') navigation.navigate('Details', {id: notification.data.jobId})
        }
    })
    

    messaging().setBackgroundMessageHandler(async (m) => console.log('got notification'));

    const getToken = async () => {
      const token = await messaging().getToken();
      return token;
    };

    const buttonClickHandler = async () => {
        if (email !== '' && password !== '') {
          const res = await login(email, password, await getToken());
          // console.log(res)
          if (res.hasOwnProperty('error') && res.error) {
            return false;
          }
          await setStorageValue('auth', true);
          navigation.navigate('Home');
        } else {
          throw {message: 'fields not full'};
        }
      };

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            dispatch(setAppStatus(nextAppState))
        });

        (async () => {
            const isAccess = await getStorageValue('auth');
            if(isAccess){
                navigation.navigate('Home');
            }
        })()

        return () => {
            subscription.remove();
          };

    }, [])

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
                onPress={buttonClickHandler}>
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