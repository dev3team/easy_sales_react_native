import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RadioForm from 'react-native-simple-radio-button';
import  {PaymentByMilestone} from '../PaymentTypes/PaymentByMilestone';
import { PaymentByProject } from '../PaymentTypes/PaymentByProject';
import { setType, setTermsValue, setIsActive } from '../../store/bidSlice';


export const FixedJobTerms = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.bid.bidDetailsForInput.terms.data);
    

    const options = [{
        label: 'By milestone',
        value: 'milestone',
    },
    {
        label: 'By project',
        value: 'byproject'
    }]

    const [chosenOption, setChosenOption] = useState('milestone');
    useEffect(() => {
        dispatch(setType('fixed'));
        dispatch(setTermsValue([{type: 'milestone', active: true, value: []},{ type: 'byproject', active: false, value: ''}]))
    }, []);

    useEffect(() => {
        dispatch(setIsActive(chosenOption))
    }, [chosenOption])

    return (
        <View>
            <Text>How do you want to be paid?</Text>
            <RadioForm
                radio_props={options}
                initial={0}
                onPress={(value) => {
                setChosenOption(value);
                }} 
            />
            {data && data[0]?.active ? <PaymentByMilestone/> : <PaymentByProject/>}
        </View>
    )
}

