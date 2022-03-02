import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My First Native App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#1b6464'
    },
    title:{
        textAlign: 'center',
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
});
