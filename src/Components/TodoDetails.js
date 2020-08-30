import React,{useContext} from 'react';
import { TodoContext } from '../Contexts/TodoContext';

const TodoDetails = ({list}) => {
    const {removeTodo} = useContext(TodoContext);
    return(
        <li onClick={()=>removeTodo(list?.id)}>
            <div className="List">{list?.List}</div>    {/* i am using here safe navigation operator (?.) */}
            <div className="Time">{list?.Time}</div>
        </li>
    );
    
 }
export default TodoDetails;