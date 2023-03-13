import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setValueByProject } from '../../store/bidSlice';

export const PaymentByProject = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.bid.bidDetailsForInput.terms.data?.[1]?.value);
    
    return (
        <View>
            <Text>What is the full amount you'd like to bid for this job?</Text>
            <Text>Bid</Text>
            <TextInput
                keyboardType='numeric'
                style={styles.input}
                onChangeText={(value) => dispatch(setValueByProject(value))}
                value={value}
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
        width: 250
    }
})