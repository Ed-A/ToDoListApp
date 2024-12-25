import React, { useState } from "react";
import './InputField.css';

export default function InputField(props){

    const [responseMessage, setResponseMessage] = useState('');

    const apiURL = process.env.REACT_APP_API_URL;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({ Name: props.taskName, Description: props.taskDescription }), // Send data as JSON
            });

            if (response.ok) {
                const data = await response.json();
                setResponseMessage('Data submitted successfully!');
                console.log('Response:', data);
            } else {
                setResponseMessage('Failed to submit data.');
                console.error('Error:', response.status, response.statusText);
            }
        } catch (error) {
            setResponseMessage('An error occurred.');
            console.error('Error:', error);
        }

        window.location.reload(true);
    };


    return(
        <div>
            <form onSubmit={handleSubmit} className="form-div">
                <input type="text" name="name" value={props.taskName} onChange={(e) => props.setName(e.target.value)} placeholder="Enter task name"></input>
                <input type="text" name="description" value={props.taskDescription} onChange={(e) => props.setDescription(e.target.value)} placeholder="Enter description"></input>
                <button className="submit" type="submit">Submit</button>
            </form>

            {responseMessage && <p>{responseMessage}</p>}
        </div>
    )
}