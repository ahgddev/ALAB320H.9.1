import { useReducer, useState } from "react";

const ACTIONS = {
  SHOW_BUTTON: "show_button",
  DISABLE_BUTTON: "disable_button",
  SHOW_SAVE: "show_save_button",
};

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

function Todo({ todoID, todoText, isComplete, deleteFunc, editFunc }) {
  const [checkedState, dispatch] = useReducer(
    (checkedState) => !checkedState,
    isComplete
  );
  const [visibleState, setVisibility] = useState({ display: "none" });
  const [saveShowState, setSaveShowState] = useState(true);
  const [editTxt, setEditTxt] = useState("");

  function updateVisibilityState() {
    setVisibility({ display: saveShowState ? "inline-block" : "none" });
    setSaveShowState((s) => !s);
  }

  // setEditTxt("banana")
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
      <label htmlFor="completed">Completed</label>
      <input
        type="text"
        name="editTodo"
        id="editTodo"
        placeholder={todoText}
        style={visibleState}
        onChange={(e) => setEditTxt(e.target.value)}
      />
      <button
        name="editBtn"
        style={{ display: saveShowState ? "inline-block" : "none" }}
        onClick={updateVisibilityState}
      >
        Edit ToDo
      </button>
      <button
        name="deleteBtn"
        style={{ display: saveShowState ? "inline-block" : "none" }}
        disabled={!checkedState}
        onClick={() => deleteFunc(todoID)}
      >
        Delete ToDo
      </button>
      <button
        name="saveBtn"
        style={visibleState}
        onClick={() => {
          updateVisibilityState;
          editFunc(todoID, editTxt);
        }}
      >
        Save Edit
      </button>
    </div>
  );
}

export default Todo;
