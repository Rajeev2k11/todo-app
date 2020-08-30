import React from 'react';
import './App.css';
import TodoContextProvider from './Contexts/TodoContext';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoLists';
import TodoDetails from './Components/TodoDetails';
import NewTodo from './Components/NewTodo';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar/>
        <TodoList/>
        <TodoDetails/>
        <NewTodo/>
      </TodoContextProvider>
    </div>
  );
}

export default App;
