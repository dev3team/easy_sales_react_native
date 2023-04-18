import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Text} from 'react-native';
import { getJob } from '../utils/axios';
import  {socket}  from '../App';
import { Preloader } from '../components/Preloader';
import { Button } from '../components/Button';

export default function Details({route, navigation}) {
    const [job, setJob] = useState(null)
    const { id } = route.params;

    const fetchJob = async () => {
        const jobData = await getJob(id);
        const {data} = jobData;
        setJob({...data.job, ...data.parsed})
    }

    useEffect(() => {
        fetchJob()
    }, [id])

    const apply = () => {
        socket.emit('apply job', {url: job.url, jobType: job.job_type}); 
        navigation.navigate('Proposal', {url: job.url});
    }

    return (
    job ? <ScrollView>
        <Text style={style.header}>Details</Text>
        {job && 
            <View style={style.container}>
                {job.title ? <Text style={style.item}>Title: {job.title}</Text> : <></>}
                {job.snippet ? <Text style={style.item}>Description: {job.snippet}</Text> : <></>}
                {job.skills ? <Text style={style.item}>Skills: {job.skills.join(', ')}</Text> : <></>}
                {job.country ? <Text style={style.item}>Country: {job.country}</Text> : <></>}
                {job.city ? <Text style={style.item}>City: {job.city}</Text> : <></>}
                {job.payment_verification_status ? <Text style={style.item}>Payment verification status: {job.payment_verification_status}</Text> : <></>}
                {job.expertise ? <Text style={style.item}>Expertise: {job.expertise}</Text> : <></>}
                {job.hourly_rate ? <Text style={style.item}>Hourly rate: {job.hourly_rate}</Text> : <></>}
                {job.fixed_price ? <Text style={style.item}>Fixed price: {job.fixed_price}</Text> : <></>}
                {job.client_total_spent ? <Text style={style.item}>Client total spent: {job.client_total_spent}</Text> : <></>}
                {job.average_rating ? <Text style={style.item}>Average rating: {job.average_rating}</Text> : <></>}
                {job.reviews ? <Text style={style.item}>Reviews: {job.reviews}</Text> : <></>}
                {job.avg_hourly_rate_paid ? <Text style={style.item}>Avg hourly rate paid: {job.avg_hourly_rate_paid}</Text> : <></>}
                {job.hire_rate ? <Text style={style.item}>Hire rate: {job.hire_rate}</Text> : <></>}
                {job.open_job ? <Text style={style.item}>Open job: {job.open_job}</Text> : <></>} 
                {job.client_hires ? <Text style={style.item}>Client hires: {job.client_hires}</Text> : <></>}
            </View>}
            <View style={style.buttonGroup}>
                <Button title="Apply now" onPress={apply}/>
                <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
            </View>
            
    </ScrollView>
    : 
    <Preloader/>
    );
}

const style = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#2a8002',
        margin: 10,
        padding: 10,
    },
    header: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 700,
        marginLeft: 10,
    },
    item: {
        marginRight: 20,
        // marginBottom: 4,
    },
    button: {
        width: 40
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        marginTop: 20,
    }
})