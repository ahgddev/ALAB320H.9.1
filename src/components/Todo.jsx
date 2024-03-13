import { useEffect, useState } from "react";

function Todo({ todoID, todoText, isComplete }) {
  const [checkedState, setChecked] = useState(isComplete);
  const [disabledState, setDisable] = useState();

  function updateDisabledState(){
    checkedState == true ?  setDisable(() => true) : setDisable(() => false)
  }

  function updateCheckedState() {
    setChecked(checked => !checked);
    updateDisabledState();
  }

  return (
    <div className="todoItem">
      <p id="todoID">{todoID}</p>
      <p id="todoStr">{todoText}</p>
      <input
        type="checkbox"
        name="completed"
        id="completeChkBox"
        checked={checkedState}
        onChange={updateCheckedState}
      />
      <label for="completed" if>
        Completed
      </label>
      <button name="editBtn">Edit ToDo</button>
      <button name="deleteBtn" disabled={!checkedState}>
        Delete ToDo
      </button>
      <button name="saveBtn" style={{ display: "none" }}>
        Save Edits
      </button>
    </div>
  );
}

export default Todo;
