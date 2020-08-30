import React,{useContext} from 'react';
import { TodoContext } from '../Contexts/TodoContext';

const TodoDetails = ({list}) => {
    const {removeTodo,Todo} = useContext(TodoContext);
    return Todo.length?(
    
        <li className="flex-container">      
            <div className="TList">{list?.List}</div>    {/* i am using here safe navigation operator (?.) */}
            <div className="Time">{list?.Time}</div>
            <button onClick={()=>{removeTodo(list?.id)}} className="button">Remove</button>
            
        </li>

        
    ):(
        <div></div>
    );
    
 }
export default TodoDetails;