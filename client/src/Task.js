import React from 'react';
import './Task.css';

export default function Task(props){

    const apiURL = process.env.REACT_APP_API_URL;

    const deleteTask = async () => {
            
            try {
                const response = await fetch(apiURL+ props.id, {
                    method: 'DELETE',
                });
    
                if (response.ok) {
                    console.log("Deleted")
                } else {
                    console.error('Error:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
    
            window.location.reload(true);
    };

    const editTask = async () => {

        props.setName(props.name);
        props.setDescription(props.description);

        props.setClose(true);

        props.setStatus("update");
        props.setTaskId(props.id);
    }

    const prioritizeTask = async () => {

        try {
            const response = await fetch(apiURL+ `${props.id}/up`, {
                method: 'PUT',
            });

            if (response.ok) {
                console.log("Prioritized")
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }

        window.location.reload();

    }

    return(
        <div className='tasklist-box'>
            <div className='task-box'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
            <div className='btn-box'>
                <button onClick={prioritizeTask}>🌟</button>
                <button onClick={editTask}>✍️</button>
                <button onClick={deleteTask}>❌</button>
            </div>
        </div>
    )
}