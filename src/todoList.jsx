import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import "./TodoList.css";
export default function TodoList(){
    let [todos,setTodos]=useState([
        { task: "Practice coding", id: uuidv4(), isDone: false },
        { task: "Go for a walk", id: uuidv4(), isDone: false },
        { task: "Read a book", id: uuidv4(), isDone: false }
    ]);

    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
      setTodos((prevTodos)=>{
        return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
      });
      setNewTodo("");
    };

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
       setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!==id)
    );
    }

    let markasDoneAll=()=>{
        setTodos((prevTodos)=>
            todos.map((todo)=>{
            return {
                ...todo,
                isDone:true,
            }
        }));
    };

   
    let markasDone=(id)=>{
        setTodos((prevTodos)=>
            todos.map((todo)=>{
                if(todo.id==id){
                    return {
                        ...todo,
                        isDone:true,
                    }
                }
                else{
                    return todo;
                }
            })
        );
    }
    
        
    return (
        <div>
            <h2> Todo List</h2>
            <input type="text" value={newTodo} placeholder="Enter task" onChange={updateTodoValue} />
            <button onClick={addNewTask} className="addbtn" >Add</button>
            <br /><br />
            <hr />
            <h3>Tasks to do</h3>
               { todos.length === 0 ? (
                <p style={{ color: "#e68b8b", fontStyle: "italic" }}>
                    No tasks yet, add one above!
                </p>
              ):<ul>
                    {
                        todos.map((todo)=>(
                            <li className="list" key={todo.id}>
                                <span style={todo.isDone?{textDecoration:"line-through"}:{}}>{todo.task}</span>
                                &nbsp;
                                
                                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                                &nbsp;&nbsp;
                                <button  onClick={()=>{markasDone(todo.id)}}>Done</button>
                            </li>
                        ))  
                    }
                </ul>}
            { <button onClick={markasDoneAll}>Mark As Done All</button> }
            
        </div>
    )
}