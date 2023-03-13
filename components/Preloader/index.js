import React from 'react';
import {ActivityIndicator, StyleSheet, View, useWindowDimensions} from 'react-native';

export const Preloader = () => {
    const {height} = useWindowDimensions();
    return (
        <View style={{height}}>
            <ActivityIndicator style={styles.item} size="large" />
        </View>
    )
}
    
  


const styles = StyleSheet.create({
    item: {
        flex:1,
    }
});