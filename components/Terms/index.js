import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';
import { useSelector } from 'react-redux';

import { HourlyJobTerms } from '../HourlyJobTerms';
import { FixedJobTerms } from '../FixedJobTerms';



export const Terms = ({terms}) => {
    const {jobType, milestone} = terms;

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.header}>Terms</Text>
            </View>
            {jobType == "Fixed" ? <FixedJobTerms milestone={milestone}/> : <HourlyJobTerms/>}
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: '#01cdbe',
        borderRadius: 10,
        margin: 20,
        padding: 20,
    },
    header: {
        fontWeight: '700',
        fontSize: 16
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 250
    }
})