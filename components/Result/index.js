import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Button } from '../Button';
import { Preloader } from '../Preloader';
import { reset } from '../../store/bidSlice';


export const Result = ({navigation}) => {
    const result = useSelector(state => state.bid.result);
    const dispatch = useDispatch();

    const goBack = () => {
        navigation.navigate('Home');
        dispatch(reset());
    }

    return (
        result ? 
            <View style={styles.container}>
                <Text style={styles.result}>{result}</Text>
                <Button title='Go back' onPress={goBack}></Button>
            </View>
        :
            <Preloader/>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    result: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 50,
        marginBottom: 100,
        fontWeight: '700',
    }
})