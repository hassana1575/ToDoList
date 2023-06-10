import React from 'react';
import ToDo from './ToDo';
import { Button } from '@mui/material';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <Button variant='contained' onClick={handleFilter}>Clear Completed</Button>
        </div>
    );
};

export default ToDoList;