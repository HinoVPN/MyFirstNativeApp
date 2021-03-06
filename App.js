import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItems from './components/toDoItems';
import AddTodo from './components/addTodo';
import SandBox from './components/test';


export default function App() {

  const [todos, setTodos] = useState([
    {text: "Hino want to buy a coffee", key: 1},
    {text: "Hino want to create an app", key: 2},
    {text: "Hino want to play switch", key: 3},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3 ){
      setTodos((prevTodos)=>{
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ];
      })
    }else{
      Alert.alert('OOPS!', "The mission must be over 3 chars long",[
        {text: 'Understood', onPress: () => console.log("alert closedsd")}
      ])
    }

  }

  return (
    //<SandBox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          <AddTodo  submitHandler={submitHandler}/>
          {/* To Form */}
          <View style={styles.list}>
            <Text>Tap to delete the Tasks</Text>
            <FlatList
              style={{marginVertical: 20 }} 
              data={todos}
              renderItem={({item})=> {
                return (
                  <TodoItems item={item} pressHandler={pressHandler}/>
                )
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex: 1,
    padding: 40,
  },
  list:{
    flex: 1,
    marginVertical: 10,
    padding: 10,
  }
});
