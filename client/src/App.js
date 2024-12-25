import './App.css';
import ToDoListHeader from './ToDoList';
import InputField from './InputField';
import TaskList from './TaskList';
import UpdateField from './UpdateField';
import React, {useState} from 'react';

function App() {

  const [taskName, setName] = useState('');
  const [taskDescription, setDescription] = useState('');
  const [taskId, setTaskId] = useState('');
  const [status, setStatus] = useState('submit');
  const [close, setClose] = useState(false);


  return (
    <>
        <ToDoListHeader close={close} setClose={setClose}/>
        
        {(close)?
          (status==="submit")?
          (
            <InputField 
              taskName={taskName} 
              taskDescription={taskDescription} 
              setName={setName} 
              setDescription={setDescription}
              setStatus={setStatus}/>
          ) 
          :
          (
            <UpdateField
              taskName={taskName} 
              taskDescription={taskDescription} 
              taskId = {taskId}
              setTaskId = {setTaskId}
              setName={setName} 
              setDescription={setDescription}
              setStatus={setStatus}/>
          )
          :
          (<></>)
        }

        {
        
        }

        <TaskList 
          taskName={taskName} 
          taskDescription={taskDescription} 
          setTaskId = {setTaskId}
          setName={setName} 
          setDescription={setDescription}
          setStatus = {setStatus}
          setClose = {setClose}/>

    </>
  );

  
}

export default App;
