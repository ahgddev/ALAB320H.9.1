import {useState, useReducer} from "react"
import Todo from "../components/Todo";
import { initialState as data } from "../database/data";

const ACTIONS = {
  DELETE_TODO: "delete_todo",
  ADD_TODO: "add_todo"
  }

  function reducer(state, action){
    switch (action.type){
      case "delete_todo":
        return(
          state.filter((todos) => todos.id !== action.payload.ID)
        )
    case ACTIONS.ADD_TODO:
      return (
        [newTodo(action.payload.title, action.payload.nextID), ...state]
      )
    default:
      return state
  }

}

function newTodo(title, nextID){
return ({
  "userId": 1,
  "id": nextID + 1,
  "title": title,
  "completed": false
})
}

function TodoList() {
const [TodoData, dispatch] = useReducer(reducer, data)
const [todoText, setTodoText] = useState('');


  return (
    <>
      <h1>Todo List</h1>
      <input type="text" id="addTodo" onChange={(e) => setTodoText(e.target.value)}/>
      <button id="addTodo" onClick={() => {
          dispatch({ type: ACTIONS.ADD_TODO, payload: { title: todoText, nextID: TodoData.length} })
        }}>Add ToDo</button>
      <div id="todoContainer">
        {TodoData.map((todoData) => (
          <Todo
            key={todoData.id}
            todoID={todoData.id}
            todoText={todoData.title}
            isComplete={todoData.completed}
            deleteFunc={() => {dispatch({ type: ACTIONS.DELETE_TODO, payload: { ID: todoData.id }})
          }}
          />
        ))}
       
      </div>
    </>
  );
}

export default TodoList;
