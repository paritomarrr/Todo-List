import React from 'react';


const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    // here we'll add javascript
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
      // prevent default helps in preventing the page from refreshing every time to input a data
          e.preventDefault();
          setTodos ([
              ...todos, 
              { text: inputText, completed: false, id: Math.random() * 1000}
          ]);
          // this will clear the input column every time you add something in the todo
          setInputText("");
    };
    const statusHandler = (e) => {
      setStatus(e.target.value)
    };
    return (
        <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />     
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
};

export default Form;