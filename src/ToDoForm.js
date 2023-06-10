import React, { useState } from 'react';
import { Button } from '@mui/material';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <div className='App'>
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
            {/* <Button variant="contained">Submit</Button> */}
        </form>
        </div>
    );
};

export default ToDoForm;