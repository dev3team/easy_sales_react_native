import { Dropdown } from 'react-native-element-dropdown';
import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFreelancer } from '../../store/bidSlice';


export const Freelancer = () => {
    const dispatch = useDispatch();
    const freelancer = useSelector(state => state.bid.bidDetailsForInput.freelancer);

    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: 'Freelancer1', value: 'Freelancer1' },
        { label: 'Freelancer2', value: 'Freelancer2' },
        { label: 'Freelancer3', value: 'Freelancer3' },
        { label: 'Freelancer4', value: 'Freelancer4' },
        { label: 'Freelancer5', value: 'Freelancer5' },
        { label: 'Freelancer6', value: 'Freelancer6' },
    ]

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                data={data}
                value={freelancer}
                maxHeight={250}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select a freelancer' : '...'}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    dispatch(setFreelancer(item.value));
                    setIsFocus(false);
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    container: {
        padding: 20,
        paddingLeft: 0,
        paddingRight: 0
    },
})