import {useState} from "react"

function Todo({todoID, todoText, isComplete}) {
 const [checkedState, setChecked] = useState(false)

 function updateCheckedState(){
  setChecked(this.target.checked)
 }

  return (
    <div className="todoItem">
      <p id="todoID">{todoID}</p>
      <p id="todoStr">{todoText}</p>
      <input type="checkbox" name="completed" id="completeChkBox" onChange={updateCheckedState}/>
      <label for="completed" if>Completed</label>
      <button name="editBtn">Edit ToDo</button>
      <button name="deleteBtn" disabled>Delete ToDo</button>
    </div>
  )
}

export default Todo