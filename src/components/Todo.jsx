import { useEffect, useState } from "react";

function Todo({ todoID, todoText, isComplete }) {
  const [checkedState, setChecked] = useState();

  function updateCheckedState() {
    setChecked(checked && !checked);
  }

  return (
    <div className="todoItem">
      <p id="todoID">{todoID}</p>
      <p id="todoStr">{todoText}</p>
      <input
        type="checkbox"
        name="completed"
        id="completeChkBox"
        defaultChecked={isComplete}
        onChange={updateCheckedState}
      />
      <label for="completed" if>
        Completed
      </label>
      <button name="editBtn">Edit ToDo</button>
      <button name="deleteBtn" disabled>
        Delete ToDo
      </button>
    </div>
  );
}

export default Todo;
