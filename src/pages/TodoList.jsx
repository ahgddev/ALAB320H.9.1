import {useState, useEffect} from "react"
import Todo from "../components/Todo";
import { initialState as data } from "../database/data";

function TodoList() {
const [TodoData, setTodoData] = useState(data)

function deleteTodo(ID){
  setTodoData(TodoData.filter((todos) => todos.id !== ID))
}

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" id="addTodo" />
      <div id="todoContainer">
        {TodoData.map((todoData) => (
          <Todo
            key={todoData.id}
            todoID={todoData.id}
            todoText={todoData.title}
            isComplete={todoData.completed}
            deleteFunc={deleteTodo}
          />
        ))}
       
      </div>
    </>
  );
}

export default TodoList;
