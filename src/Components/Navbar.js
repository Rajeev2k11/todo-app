import React, { useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContext';

const Navbar = () => {
    const {Todo} = useContext(TodoContext)
    return (
    <div className="Navbar">
        <h1>Todo List App</h1>
    <p>{Todo.length} activities have to do </p>
    </div>
    )
}
export default Navbar;