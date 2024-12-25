import React, { useState } from "react";
import './InputField.css';

export default function UpdateField(props){

    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const apiURL = process.env.REACT_APP_API_URL + props.taskId;

        try {
            const response = await fetch(apiURL, {
                method: 'PATCH',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(
                    {   Id: props.taskId,
                        Name: props.taskName, 
                        Description: props.taskDescription }
                ), 
            });

            if(!response.ok){
                console.log("Error");
            }else{
                console.log("Good");
            }

        } catch (error) {
            setResponseMessage('An error occurred.');
            console.error('Error:', error);
        }

        window.location.reload(true);
    };


    return(
        <>
            <form onSubmit={handleSubmit} className="form-div">
                <input type="text" name="name" value={props.taskName} onChange={(e) => props.setName(e.target.value)}></input>
                <input type="text" name="description" value={props.taskDescription} onChange={(e) => props.setDescription(e.target.value)}></input>
                <button type="submit" className="submit">Update</button>
            </form>

            {responseMessage && <p>{responseMessage}</p>}
        </>
    )
}