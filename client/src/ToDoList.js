import './ToDoList.css';

export default function ToDoListHeader(props){

    const close = () => {
        props.setClose(!props.close);
    }

    return(
        <div className='ctr'>
            <h1>To Do List</h1>
            <button className="x-btn" onClick={close}>
                {props.close? "-" : "+"}
            </button>
        </div>
    )
}