import React, { useState,useEffect } from 'react';
import Form from './components/Form';
import './App.css';
import TodoList from './components/TodosList';

function App () {
  // states stuff
  // input text is the value and setinputtext is the function who'll use the value
   const [inputText,setInputText] = useState("");
   const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState("all");
   const [filteredTodos, setFilteredTodos] = useState([]);

   //RUN ONCE when the app start
   useEffect(() => {
     getLocalTodos();
   }, []);
   //use effects 
   useEffect(() => {
     filterHandler();
     saveLocalTodos();
   }, [todos, status]);
   //functionss
   const filterHandler = () => {
         switch(status)  {
         case "completed":
           setFilteredTodos(todos.filter(todo => todo.completed === true));
         break;
         case "uncompleted":
           setFilteredTodos(todos.filter(todo => todo.completed === false));
         break;
         default:
           setFilteredTodos(todos);
         break;
     }
   };
   //save to Local
   const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
   };
   const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
   };
    return (
      <div className="App">
        <header>
          <h1>My Todo's List </h1>
        </header>
        <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus}  />
        <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
      </div>
    );
  };


export default App;
