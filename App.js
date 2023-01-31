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
 
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 import Auth from './screens/Auth';
 import Register from './screens/Register';
 
 const Stack = createNativeStackNavigator();
 
function App(){
	return (
		<NavigationContainer>
			<Stack.Navigator 
				screenOptions={{
				headerShown: false,
				}}>
				<Stack.Screen name="Auth" component={Auth} />
				<Stack.Screen name="Register" component={Register} />	
				
			</Stack.Navigator>
		</NavigationContainer>
	);
}
 
 
 
 export default App;


