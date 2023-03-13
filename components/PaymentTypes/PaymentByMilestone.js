import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addMilestone } from '../../store/bidSlice';
import { Milestone } from '../Milestone';
import { Button } from '../Button';

export const PaymentByMilestone = () => {
    const dispatch = useDispatch();
    const milestones = useSelector(state => state.bid.bidDetailsForInput.terms.data?.[0]?.value);
    
    useEffect(() => {
        if (milestones?.length == 0) dispatch(addMilestone())
    }, [])
    

    return(
        <View>
            <Text>How many milestones do you want to include?</Text>
            <View>
                {milestones.map((item, index) => 
                    <Milestone key={index} index={index} item={item}/>
                )}
            </View>
            <Button title="add milestone" onPress={() => dispatch(addMilestone())}/>
            {/* <Text onPress={() => dispatch(addMilestone())}>
                + add milestone
            </Text> */}
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
    
})