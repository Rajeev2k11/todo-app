import React, {createContext ,useState} from 'react';
// import uuid from 'uuid/v1'
import { v4 as uuidv4 } from 'uuid';
export const TodoContext = createContext();

const TodoContextProvider = (props) =>{
    const [Todo, setTodo] = useState([
        {List:"Walking", Time:"07:00 ", id: 1},
        {List:"Workout", Time:"08:00", id: 2},
    ]);

    const addTodo= (List, Time)=>{
        setTodo([...Todo, {List,Time, id:uuidv4()}]);   // install uuid for generating id "npm install uuid"
    }

    const removeTodo = (id) =>{ 
        setTodo(Todo.filter(list=> list.id !== id));
    }

    return(
        <TodoContext.Provider value= {{Todo, addTodo, removeTodo}}>
            {props.children}
        </TodoContext.Provider>
    )

}
export default TodoContextProvider;