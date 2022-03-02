import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';


export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (string) => {
        setText(string)
        console.log(string)
    };

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter your task"
                onChangeText={(val)=>{changeHandler(val)}}
            />
            <TouchableOpacity 
                style={styles.buttonProps}
                onPress={() => submitHandler(text)}
                underlayColor='#fff'>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>    
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#1b6464"
    },
    buttonProps:{
        marginTop:10,
        marginHorizontal: 120,
        paddingVertical: 10,
        backgroundColor:'#1B6464',
        borderRadius:50,
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
    }
});
