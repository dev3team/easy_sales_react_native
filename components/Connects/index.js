
import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, TextInput, Button, Text} from 'react-native';

export const Connects = ({connects}) => {
    const {requiredConnects, availableConnects} = connects; /// {requiredConnects: 6, availableConnects: 5}
    return (
        <View style={styles.container}>
            <Text style={styles.importantText}>Send a proposal for: {requiredConnects} connects</Text>
            <Text style={styles.importantText}>Available Connects: {availableConnects}</Text>
            {+availableConnects < +requiredConnects && <Text style={styles.alert}>You don't have enough connects for bid</Text>}
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
    importantText: {
        fontWeight: '500',
        fontSize: 16
    },
    alert: {
        fontWeight: '700',
        fontSize: 16,
        color: 'red'
    }
})