import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function SandBox() {
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>ONE</Text>
            <Text style={styles.boxTwo}>TWO</Text>
            <Text style={styles.boxThree}>THREE</Text>
            <Text style={styles.boxFour}>FOUR</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#eee',
    },
    boxOne:{
        flex: 1,
        backgroundColor: "violet",
        padding: 10
    },
    boxTwo:{
        flex: 1,
        backgroundColor: "gold",
        padding: 20
    },
    boxThree:{
        flex: 1,
        backgroundColor: "green",
        padding: 30
    },
    boxFour:{
        flex: 1,
        backgroundColor: "coral",
        padding: 40
    }
});
