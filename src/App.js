import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
// import BackgroundVideo from './BackgroundVideo';
import hell from './assets/hell.mp4'
// import FixedBackgroundVideo from 'C:\Users\SPIDY\Desktop\MERN PROJECTS\task3\task3\src\FixedBackgroundVideo.css';


function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    
    <div >
      <div className='App'>
      {/* <video src={hell} autoPlay loop muted></video> */}
      </div>
      {/* <BackgroundVideo/> */}
      
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
      
    </div>
  );
}

export default App;
