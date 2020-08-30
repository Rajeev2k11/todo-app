import React, { useState, useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContext';

const NewTodo = () => {
    const {addTodo} = useContext(TodoContext);
    const [List, setList] = useState('');
    const [Time, setTime] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(title, author);
        addTodo(List, Time);
        setList('');
        setTime('');
      }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Todo List" value={List}
                onChange={(e) => setList(e.target.value)} />
            <input type="time" placeholder="Time" value={Time}
                onChange={(e) => setTime(e.target.value)} />
            <input type="submit" value="Add" />
    </form>
    );
}

    

export default NewTodo;