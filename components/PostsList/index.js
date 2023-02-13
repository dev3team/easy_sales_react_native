import React, {useEffect, useState, useRef} from 'react';
import { FlatList } from "react-native-bidirectional-infinite-scroll";
import Post from '../Post';

const PostsList = ({fetchMoreData, jobsList, navigation, flatlist}) => {

	return (
			<FlatList
			ref={flatlist}
			data = {jobsList}
			renderItem={({item})=> (
				<Post post={item} navigation={navigation}/>
			)}
			keyExtractor={item => item.id}
			onEndReachedThreshold={0.2}
			onEndReached={fetchMoreData}
		/>
	);
};

export default PostsList;
