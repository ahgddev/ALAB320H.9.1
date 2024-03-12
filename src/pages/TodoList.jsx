import Todo from "../components/Todo";
import { initialState as data } from "../database/data";

function TodoList() {
  return (
    <>
      <h1>Todo List</h1>
      <input type="text" id="addTodo" />
      <div id="todoContainer">
        {data.map((todoData) => (
          <Todo
            key={todoData.id}
            todoID={todoData.id}
            todoText={todoData.title}
            isComplete={todoData.completed}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
