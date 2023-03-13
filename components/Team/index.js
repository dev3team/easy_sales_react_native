import { Dropdown } from 'react-native-element-dropdown';
import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setTeam } from '../../store/bidSlice';
import { Freelancer } from '../Freelancer';


export const Team = () => {
    const dispatch = useDispatch();
    const team = useSelector(state => state.bid.bidDetailsForInput.team);
    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: 'DEV-3', value: 'DEV-3' },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Who will this proposal come from?</Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                data={data}
                value={team}
                maxHeight={250}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select a team' : '...'}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    dispatch(setTeam(item.value));
                    setIsFocus(false);
                }}
            />
            <Freelancer/>
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