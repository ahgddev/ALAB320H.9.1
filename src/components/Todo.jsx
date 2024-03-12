function Todo(props) {
  return (
    <div className="todoItem">
      <p id="todoStr">Todo Item</p>
      <button name="deleteBtn">Delete ToDo</button>
      <button name="editBtn">Edit ToDo</button>
    </div>
  )
}

export default Todo