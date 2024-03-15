import { useReducer, useState } from "react";

const ACTIONS = {
SHOW_BUTTON: "show_button",
DISABLE_BUTTON: "disable_button",
SHOW_SAVE: "show_save_button"
}

// function reducer(elState, action){
//   switch (action.type){
//     case "set_checked":
//       return (
//       elState ? true : false
//       // disabledState => !disabledState
//       )
//     case "delete_todo":
//       return(
//         h
//       )
//     default:
//       return elState
//   }
//   }

function Todo({ todoID, todoText, isComplete, deleteFunc}) {
  const [checkedState, dispatch] = useReducer(checkedState => !checkedState, isComplete);
  const [visibleState, setVisibility] = useState({display: "none" });
  const [saveShowState, setSaveShowState] = useState(true)

  function updateVisibilityState(){
   setVisibility({ display: saveShowState ? "inline-block" : "none" })
   setSaveShowState(s => !s)
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
        onChange={dispatch}
      />
      <label htmlFor="completed" if>
        Completed
      </label>
      <button name="editBtn" style={{ display: saveShowState ? "inline-block" : "none" }}  onClick={updateVisibilityState}>Edit ToDo</button>
      <button name="deleteBtn" style={{ display: saveShowState ? "inline-block" : "none" }} disabled={!checkedState} onClick={() => deleteFunc(todoID)}>
        Delete ToDo
      </button>
      <button name="saveBtn" style={visibleState} onClick={updateVisibilityState} >
        Save Edit
      </button>
    </div>
  );
}

export default Todo;
