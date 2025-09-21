import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos,setTodos]=useState([{task:"Sample task",id:uuidv4()}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
      setTodos((prevTodos)=>{
        return [...prevTodos,{task:newTodo,id:uuidv4()}]
      });
      setNewTodo("");
    };
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }
    return (
        <div>
            <h4> Todo List</h4>
            <input type="text" value={newTodo} placeholder="Enter task" onChange={updateTodoValue} />
            <button onClick={addNewTask}> Add</button>
            <br /><br /><br />
            <hr />
            <h6>Tasks to do</h6>
            <ul>
            {
                todos.map((todo)=>(
                    <li key={todo.id}>{todo.task}</li>
    ))  
            }
            </ul>
        </div>
    )
}