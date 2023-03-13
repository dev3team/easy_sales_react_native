import { Dropdown } from 'react-native-element-dropdown';
import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setDuration } from '../../store/bidSlice';


export const Duration = () => {
    const dispatch = useDispatch();
    const duration = useSelector(state => state.bid.bidDetailsForInput.duration);

    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: 'More than 6 months', value: 'More than 6 months' },
        { label: '3 to 6 months', value: '3 to 6 months' },
        { label: '1 to 3 months', value: '1 to 3 months' },
        { label: 'Less than 1 month', value: 'Less than 1 month' }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.header}>How long will this project take?</Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                data={data}
                value={duration}
                maxHeight={250}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    dispatch(setDuration(item.value));
                    setIsFocus(false);
                }}
            />
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
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    header: {
        fontWeight: '700',
        fontSize: 16
    },
})