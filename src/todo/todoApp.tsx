import { useState } from "react";
import TodoForm from "./todoForm";
import { IETodoTask } from "../utils/interfaces";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./todoList";
function TodoApp() {
  const [todolist, setTodoList] = useState<Array<IETodoTask>>([]);
  const appendTodoTaskToList = (todo : string ) => {
    let taskobj:  IETodoTask = {
      id : uuidv4(), 
      todo : todo, 
      isCompleted : false, 
      isEditing : false
    }
    setTodoList([...todolist, taskobj]);
  }
  return (
    <div className=" sm:ml-64 flex flex-col min-h-screen justify-center ">
        <TodoForm appendTodoTaskToList={appendTodoTaskToList}/>
        {todolist.map((todo, index) => (
        <TodoList todo={todo} key={index}/>
    ))}
    </div>
  );
}

export default TodoApp;

