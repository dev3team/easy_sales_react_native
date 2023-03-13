import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setTermsValue, setType } from '../../store/bidSlice'

export const HourlyJobTerms = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.bid.bidDetailsForInput.terms.data);
    useEffect(() => {
        dispatch(setType('hourly'))
    }, [])
    return(
        <View>
            <Text>What is the rate you'd like to bid for this job?</Text>
            <View>
                <Text>Hourly Rate</Text>
                <TextInput
                    keyboardType='numeric'
                    style={styles.input}
                    onChangeText={(value) => {dispatch(setTermsValue(value))}}
                    value={value}
                />
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 250
    }
})