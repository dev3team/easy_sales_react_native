import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {getJobs} from '../../utills/axios';
import PostsList from '../PostsList';

import { useSelector, useDispatch } from 'react-redux';
import { addJobs, fetchJobs } from '../../store';
// import {getJobs} from '../../utills/axios';

import {getStorageValue} from '../../utills/localStorage';
import settings from '../../config/default';
import { io } from "socket.io-client";
import { store } from '../../store';
import { addNewJobs } from '../../store';

export const socket = io("ws://192.168.0.103:3306");

socket.on('connect', () => {
   socket.emit('create new user', 'add me')
})

socket.on('new jobs', (data) => {
  store.dispatch(addNewJobs({data}))
})


let theme;

const setTheme = async () => {
  const setSaveTheme = await getStorageValue('theme');
  theme = setSaveTheme !== null ? setSaveTheme : 'light';
};

setTheme();

export default function Main({navigation}) {
	const {jobs, isListEnd, isLoading} = useSelector((state) => state.parsedJobs);
	
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();

	const sendRequestAPI = () => {
		dispatch(fetchJobs(jobs.length))
	};

	const fetchMoreData = () => {
		if(!isListEnd && !isLoading){
			setPage(page + 1)
		}
	}

	useEffect(() => {
		sendRequestAPI()
		console.log("CURRENT PAGE", page)
	}, [page])

  return (
    <View>
      <View
        style={[
          styles.container,
          {backgroundColor: settings.app.theme[theme].backgroundColor},
        ]}>
        <View>
          {/* <TextInput
            style={[
              styles.input,
              {borderColor: settings.app.theme[theme].borderColor},
            ]}
            onChangeText={changeText}
            value={search}
          /> */}
          {/* <Button title="Search" onPress={sendRequest} /> */}
        </View>
        <PostsList fetchMoreData={fetchMoreData} jobsList={jobs} isLoading={isLoading} isListEnd={isListEnd}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 14,
    borderWidth: 3,
  },
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    height: '100%',
  },
});
