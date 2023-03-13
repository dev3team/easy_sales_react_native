import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { setConnects } from '../../store/bidSlice';


export const Bids = ({bids}) => {
    const dispatch = useDispatch();
    const connects = useSelector(state => state.bid.bidDetailsForInput.connects)
    

    return (
        <View style={styles.container}>
            <View style={styles.th}>
                <Text>Live Proposals</Text><Text>Bid</Text>
            </View>
            {bids.map((bid, index) => 
                <View key={index} style={styles.tr}>
                    <Text>{index +1}st place</Text><Text>{bid}</Text>
                </View>
            )}
            <View>
                <Text style={styles.header}></Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='numeric' 
                    value={connects}
                    onChangeText={(value) => dispatch(setConnects(value))}
                />
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
        width: 250,
    },
    tr: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around', 
        borderWidth: 1,
        marginBottom: 5
    },
    th: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around', 
    }

})