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
 import Proposal from './screens/Proposal';
 import { Result } from './components/Result';
 import { store, addNewJobs } from './store';
 import { setBidDetails, setResult } from './store/bidSlice';
 import { io } from "socket.io-client";
export const api = '192.168.1.103:3306'
export const socket = io(`wss://api-upwork.dev-3.com/`);

socket.on('connect', () => {
   socket.emit('create new user', 'add me')
})

socket.on('new jobs', (data) => {
  console.log('got new jobs', data.length)
  store.dispatch(addNewJobs({data}))
})

socket.on("bid details", (data) => {
	console.log(data, 'data')
	store.dispatch(setBidDetails(data))
})

socket.on("alert", (data) => {
	store.dispatch(setResult(data));
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
				<Stack.Screen name="Proposal" component={Proposal}/>
				<Stack.Screen name="Result" component={Result}/>
			</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
 
 
 
 export default App;


