import { useState, useReducer } from "react";
import Todo from "../components/Todo";
import { initialState as data } from "../database/data";

const ACTIONS = {
  DELETE_TODO: "delete_todo",
  ADD_TODO: "add_todo",
  EDIT_TODO: "edit_todo",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.DELETE_TODO:
      return state.filter((todos) => todos.id !== action.payload.ID);
    case ACTIONS.ADD_TODO:
      return [newTodo(action.payload.title, action.payload.nextID), ...state];
    case ACTIONS.EDIT_TODO:
      return [...state, action.payload.title]
    default:
      return state;
  }
}

function newTodo(title, nextID) {
  return {
    userId: 1,
    id: nextID + 1,
    title: title,
    completed: false,
  };
}

function TodoList() {
  const [TodoData, dispatch] = useReducer(reducer, data);
  const [todoText, setTodoText] = useState("");

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        id="addTodo"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        id="addTodo"
        onClick={() => {
          dispatch({
            type: ACTIONS.ADD_TODO,
            payload: { title: todoText, nextID: TodoData.length },
          });
        }}
      >
        Add ToDo
      </button>
      <div id="todoContainer" key="1" >
        {TodoData.map((todoData) => (
          <Todo
            key={todoData.id}
            todoID={todoData.id}
            todoText={todoData.title}
            isComplete={todoData.completed}
            deleteFunc={() => {
              dispatch({
                type: ACTIONS.DELETE_TODO,
                payload: { ID: todoData.id },
              });
            }}
            editFunc={() => {
              dispatch({
                type: ACTIONS.EDIT_TODO,
                payload: { ID: todoData.id, title: todoData.title},
              });
            }}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
