import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import PostsList from '../PostsList';
import { useSelector, useDispatch } from 'react-redux';
import {getStorageValue} from '../../utils/localStorage';
import settings from '../../config/default';
import { showNewJobs, fetchJobs } from '../../store';

let theme;

const setTheme = async () => {
  const setSaveTheme = await getStorageValue('theme');
  theme = setSaveTheme !== null ? setSaveTheme : 'light';
};

setTheme();

export default function Main({navigation}) {
	const {jobs, isListEnd, isLoading, newJobs} = useSelector((state) => state.parsedJobs);
 	const dispatch = useDispatch();
	const flatlist = useRef(null) 

	const sendRequestAPI = async () => {
		await dispatch(fetchJobs(jobs.length + newJobs.length))
	};

	const scrollToOffset = () => {
		flatlist.current.scrollToOffset({ animated: false, offset: 0})
	}

	const showJobs = () => {
		scrollToOffset()
		dispatch(showNewJobs())
	}

	const fetchMoreData = async() => {
		if(!isListEnd && !isLoading){
		console.log('fetch')
		sendRequestAPI()
		}
	}

	useEffect(() => {
		console.log('mount')
		sendRequestAPI()

		return () => {
			console.log('unmount')
		}
	}, [])

  return (
    <View>
      <View
        style={[
          styles.container,
          {backgroundColor: settings.app.theme[theme].backgroundColor},
        ]}>
        <View>
			<Text style={styles.counter}>{newJobs.length} new jobs</Text>
          	{newJobs.length != 0 &&<Button title="show new" onPress={showJobs}/>}
        </View>
        <PostsList fetchMoreData={fetchMoreData} flatlist={flatlist} jobsList={jobs} navigation={navigation}/>
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
	counter: {
		fontSize: 18,
		fontWeight: 700,
		marginLeft: 20
	}
});
