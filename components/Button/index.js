import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export const Button = ({title, onPress, disabled}) =>  {
    
    return (
        <Pressable style={[styles.button, disabled && styles.disabled]} onPress={onPress} disabled={disabled}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
        width: 150,
        marginBottom: 6,
        
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    disabled: {
        backgroundColor: 'grey',
    },
    enable: {
        opacity: '1'
    }
});