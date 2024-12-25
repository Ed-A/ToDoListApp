import React, {useEffect, useState} from "react";
import Task from "./Task";
import './TaskList.css';

export default function TaskList(props){

    const [data, setData] = useState(null);

    useEffect(() => {

        const apiURL = process.env.REACT_APP_API_URL;

        const fetchData = async() => {
            try{
                const response = await fetch(apiURL);
        
                console.log("here");
        
                if(response.ok){
                    const result = await response.json();
                    setData(result);
                    console.log(result);
                }else{
                    console.error("Failed to fetch:", response.status, response.statusText);
                }
            }
            catch(error){
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return(
        <div className="list-box">
            {data ? data.map((obj) => {
                    return (
                            <Task key={obj.id} id={obj.id} name={obj.name} description={obj.description} taskName={props.taskName} taskDescription={props.taskDescription} setName={props.setName} setDescription={props.setDescription} setStatus={props.setStatus} setTaskId={props.setTaskId} setClose={props.setClose}/>
                    );
                }
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}