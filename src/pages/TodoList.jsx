import Todo from "../components/Todo"

function TodoList() {
  return (
    <>
    <h1>Todo List</h1>
    <input type="text" id="addTodo" />
    <Todo />
    <Todo />
    <Todo />
    </>
  )
}

export default TodoList