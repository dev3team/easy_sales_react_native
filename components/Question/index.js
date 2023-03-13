import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setAnswer } from '../../store/bidSlice';


export const Question = ({question, index, value}) => {
    const dispatch = useDispatch();
    

    return (
        
        <View >
            <Text>{question}</Text>
            <TextInput 
                style={styles.input} 
                value={value}
                onChangeText={(value) => dispatch(setAnswer({index, value}))}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        minWidth: 200,
        width: '90%'
    }
})