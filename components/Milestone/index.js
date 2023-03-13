import React, {useState} from 'react';
import {StyleSheet,  View, TextInput, Text} from 'react-native';
import { setDescription, deleteMilestone, setAmount } from '../../store/bidSlice';
import { useDispatch } from 'react-redux';

export const Milestone = ({index, item}) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.milestoneItem}> 
            <Text>{index + 1}</Text>
            <View>
                <TextInput 
                    placeholder='description' 
                    style={styles.input} 
                    value={item.description} 
                    onChangeText={(value) => dispatch(setDescription({index, value}))}
                />
                <TextInput 
                    keyboardType='numeric' 
                    placeholder='amount' 
                    style={styles.input} 
                    value={item.amount} 
                    onChangeText={(value) => dispatch(setAmount({index, value}))}
                />
            </View>
            <Text onPress={() => dispatch(deleteMilestone(index))}>{'\u2716'}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 250,
    },
    milestoneItem: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderWidth: 1, 
        borderColor: 'grey',
        borderRadius: 5,
        marginBottom: 10,
    }
})