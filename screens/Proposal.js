import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Terms } from '../components/Terms';
import { Duration } from '../components/Duration';
import { CoverLetter } from '../components/CoverLetter';
import { Questions } from '../components/Questions';
import { JobStatus } from '../components/JobStatus';
import { Team } from '../components/Team';
import { Bids } from '../components/Bids';
import { Button } from '../components/Button';
import { Preloader } from '../components/Preloader';
import { socket } from '../App';
import { reset } from '../store/bidSlice';

export default function Proposal({route, navigation}){
    const bidDetails = useSelector(state => state.bid.bidDetails);
    const bidData = useSelector(state => state.bid.bidDetailsForInput);
    const dispatch = useDispatch()
    const {url} = route.params;

    const setBid = () => {
        socket.emit('set bid', {bidData, url});
        navigation.navigate('Result');
    }

    const goBack = () => {
        navigation.navigate('Home');
        dispatch(reset());
    }
    
    return (
       <ScrollView>
            { bidDetails ? 
            bidDetails.status ? 
                <JobStatus status={bidDetails.status} navigation={navigation}/>
                : 
                <View>
                    <Team/>
                    <Terms type={bidDetails.jobType}/>
                    {bidDetails.isDurationQ && <Duration/>}
                    <CoverLetter/>
                    {bidDetails.jobQuestions?.length != 0 && <Questions questions={bidDetails.jobQuestions}/>}
                    {bidDetails.bids && <Bids bids={bidDetails.bids}/>}
                    <View style={styles.buttonGroup}>
                        <Button title='Send' onPress={setBid}/>
                        <Button title='Go back' onPress={goBack}></Button>
                    </View>
                    
                </View> 
            :
            <Preloader/>
            }
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    }
})