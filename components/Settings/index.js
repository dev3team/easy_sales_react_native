import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Switch,
  Button,
} from 'react-native';

import {out} from '../../utils/firebase';
import {setStorageValue, getStorageValue} from '../../utils/localStorage';
import settings from '../../config/default';
import { useDispatch } from 'react-redux';
import {resetState} from '../../store'

let theme;

const setTheme = async () => {
  const setSaveTheme = await getStorageValue('theme');
  theme = setSaveTheme !== null ? setSaveTheme : 'light';
};

setTheme();

export default function Settings({navigation}) {
  const dispatch = useDispatch()
  
  const buttonClickHandler = async() => {
    out();
    dispatch(resetState())
    navigation.navigate('Auth');
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (isEnabled) {
      setStorageValue('theme', 'light');
      theme = 'light';
    } else {
      setStorageValue('theme', 'dark');
      theme = 'dark';
    }
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInset
          AdjustmentBehavior="automatic"
          style={[styles.scrollView, {background: 'red'}]}>
          <View style={[styles.body, {background: 'red'}]}>
            <Text style={styles.highlight}>Settings page</Text>
            <View style={styles.sectionContainer}>
              <Button title="Log Out" onPress={buttonClickHandler} />
            </View>
            <Text>Theme: </Text>
            <View style={styles.themeContainer}>
              <Text>Light</Text>
              <Switch
                trackColor={{false: '#767577', true: '#625f5f'}}
                thumbColor={isEnabled ? '#000000' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text>Dark</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
    fontSize: 30,
    padding: 10,
    textAlign: 'center',
  },
  theme: {
    padding: 20,
  },
  themeContainer: {
    flexDirection: 'row',
    padding: 10,
  },
});
