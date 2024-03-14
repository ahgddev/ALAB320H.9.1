import { useEffect, useState } from "react";

function Todo({ todoID, todoText, isComplete }) {
  const [checkedState, setChecked] = useState(isComplete);
  const [disabledState, setDisable] = useState(false);
  const [visibleState, setVisibility] = useState({display: "none" });

  function updateDisabledState(){
    setDisable(s => !s)
  }

  function updateVisibilityState(){
   setVisibility({display: "inline-block" })
  }

  function updateCheckedState() {
    setChecked(checked => !checked);
    updateDisabledState();
    updateVisibilityState();
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
      <button name="editBtn" onClick={updateVisibilityState}>Edit ToDo</button>
      <button name="deleteBtn" style={{ display: visibleState ? "inline-block" : "none" }} disabled={!checkedState}>
        Delete ToDo
      </button>
      <button name="saveBtn" style={visibleState} >
        Save Edit
      </button>
    </div>
  );
}

export default Todo;
