import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItems({item, pressHandler}) {
    return(
        <TouchableOpacity style={styles.touchProps} onPress={() => pressHandler(item.key)}>
            <MaterialIcons name='delete' size={18} color={'#333'}/>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        textAlign: 'center',
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
    },
    touchProps: {
        flexDirection: "row",
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 20,
        padding: 20,
        backgroundColor: "#E0E0E0",
        elevation: 3,
    }
});