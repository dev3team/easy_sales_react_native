import { Dropdown } from 'react-native-element-dropdown';
import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setCover } from '../../store/bidSlice';
 export const CoverLetter = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.bid.bidDetailsForInput.cover);
    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: 'Template1', value: 'template1' },
        { label: 'Template2', value: 'template2' },
        { label: 'Template3', value: 'template3' },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cover letter</Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                data={data}
                value={value}
                maxHeight={250}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    dispatch(setCover(item.value));
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