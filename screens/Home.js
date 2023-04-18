import React, {useState} from 'react';
//  
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Main from '../components/Main';
// import Related from '../components/Related';
import Settings from '../components/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
      <Tab.Navigator
          headerShown={false}
          initialRouteName="Home"
          shifting={true}
          activeColor="#7b7b7b"
          inactiveColor="#FFFFFF"
          barStyle={{backgroundColor: 'red'}}
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarOptions: {
              style: {
                backgroundColor: 'red',
              },
            },
          }}>
          <Tab.Screen
            name="Main" 
            component={Main}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="apps" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={Settings}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cog" color={color} size={size} />
              )
            }}
          />
      </Tab.Navigator>
    );
  }