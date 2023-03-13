import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Question } from '../Question';
import { setAnswers } from '../../store/bidSlice';

export const Questions = ({questions}) => {
    const dispatch = useDispatch();
    const answers = useSelector(state => state.bid.bidDetailsForInput.answers)
    useEffect(() => {
        if (!answers) dispatch(setAnswers(questions.length))
    }, [])

    return (
        <View style={styles.container}> 
            <Text style={styles.header}>Questions</Text>
            <View>
                {questions.map((item, index) => <Question key={index} index={index} question={item} value={answers?.[index]}/>
            )}
            </View>
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
        marginBottom: 20
    },
    header: {
        fontWeight: '700',
        fontSize: 16
    },
})