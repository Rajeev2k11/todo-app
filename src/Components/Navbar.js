import React, { useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContext';

const Navbar = () => {
    const {Todo} = useContext(TodoContext)
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dateTime = date;
    return (
        <div className="navbar ">
            <div>
                <h1>Todo List App</h1>
                <p className="date">{dateTime}</p>
            </div>
            <p>{Todo.length} work is remaining. </p>
        </div>
    
    )
}
export default Navbar;