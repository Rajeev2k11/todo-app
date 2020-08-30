import React, { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";
import TodoDetails from "./TodoDetails";
 


const TodoList = () => {
    const {Todo} = useContext(TodoContext)
    return Todo.length ?(

    <div className="List">
        <ul>
            {Todo.map(list=>{
                return(
                    <TodoDetails list={list} key={list.id}/>
                );
            })}
        </ul>
    </div> 
    ) : (
        <div className="empty">No any activity. Good day</div>
    )
}
export default TodoList;