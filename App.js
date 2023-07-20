import logo from './logo.svg';
import './App.css';
import { Flex, Heading,VStack, IconButton,useColorMode} from '@chakra-ui/react'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from 'react';

function App() {
  const intialTodos=[{ id:1, body:"get bread"}, {id:2, body:"get butter"}];
  const [todos, setTodos]=useState(()=>JSON.parse(localStorage.getItem('todos'))|| []);
  useEffect(()=>{localStorage.setItem('todos', JSON.stringify(todos));}, [todos]);    //to make app consistent
  function deleteTodo(id){
    const newTodos=todos.filter((todo)=>
    { return todo.id!==id;
    });
    setTodos(newTodos);
  }
  function addTodo(todo){
    setTodos([...todos, todo]);
  }
  const{colorMode,toggleColorMode}=useColorMode();
   return (
    <VStack padding={1}>
      <IconButton icon={colorMode=="light"?<FaSun/>:<FaMoon/>} isRound="true" size="lg" alignSelf={'flex-end'} onClick={toggleColorMode}></IconButton>
      <Heading size="xl" fontsize="50px" color="black" fontWeight={'bold'} 
      bgGradient='linear(to-r, green.300,blue.300, pink.500)' bgClip={"text"}>TO-DO LIST</Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <AddTodo addTodo={addTodo}/>
    </VStack>
    
  );
}

export default App;
