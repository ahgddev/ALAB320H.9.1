function Todo(props) {
  return (
    <div className="todoItem">
      <p id="todoStr">Todo Item</p>
      <input type="checkbox" name="completed" id="completeChkBox" />
      <label for="completed">Mark as Completed</label>
      <button name="editBtn">Edit ToDo</button>
      <button name="deleteBtn" disabled>Delete ToDo</button>
    </div>
  )
}

export default Todo