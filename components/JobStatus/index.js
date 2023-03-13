import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, useWindowDimensions, Text} from 'react-native';
import { useDispatch } from 'react-redux';
import { reset } from '../../store/bidSlice';
import { Button } from '../Button';

export const JobStatus = ({navigation, status}) => {
    const {height} = useWindowDimensions();
    const dispatch = useDispatch()
    const goBack = () => {
        navigation.navigate('Home');
        dispatch(reset());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.status}>{status}</Text> 
            <Button title='Go back' onPress={goBack}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    status: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 50,
        marginBottom: 100,
        fontWeight: '700',
    }
})