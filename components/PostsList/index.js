import React, {useEffect, useState} from 'react';
import {ScrollView, Text, FlatList, VirtualizedList, List, ListItem} from 'react-native';


import Post from '../Post';

const PostsList = ({fetchMoreData, jobsList, isLoading, isListEnd}) => {
	
	const renderFooter = () => (
        <View>
            {isLoading && <ActivityIndicator />}
            {isListEnd && <Text>No more jobs at the moment</Text>}
        </View>
    )

	const getItemCount = (data) => {
		return data.length
	}

	const getItem = (data, index) => {
		return data[index]
	}

	return (
		<VirtualizedList
			initialNumToRender={3}
			refreshing={true}
			contentContainerStyle={{flexGrow: 1}}
			data = {jobsList}
			renderItem={({item})=> (
				<Post post={item}/>
			)}
			getItemCount={getItemCount}
			getItem={getItem}
			// renderFooter={renderFooter}
			keyExtractor={item => item.id}
			onEndReachedThreshold={0.2}
			onEndReached={fetchMoreData}
		/>
	);
};

export default PostsList;
