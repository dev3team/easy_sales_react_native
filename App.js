/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import { Provider } from 'react-redux'
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 
 import Auth from './screens/Auth';
 import Register from './screens/Register';
 import Home from './screens/Home';
 import Details from './screens/Details';
 import { store, addNewJobs } from './store';
 import { io } from "socket.io-client";
export const socket = io("ws://192.168.0.103:3306");

socket.on('connect', () => {
   socket.emit('create new user', 'add me')
})

socket.on('new jobs', (data) => {
  console.log('got new jobs', data.length)
  store.dispatch(addNewJobs({data}))
})
 
 const Stack = createNativeStackNavigator();
 
function App(){
	return (
		<Provider store={store}>
			<NavigationContainer>
			<Stack.Navigator 
				screenOptions={{
				headerShown: false,
				}}>
				<Stack.Screen name="Auth" component={Auth} />
				<Stack.Screen name="Register" component={Register} />	
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Details" component={Details}/>
			</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
 
 
 
 export default App;


