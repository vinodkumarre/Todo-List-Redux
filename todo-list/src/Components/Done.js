import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { doneActions } from "../Store/doneReducer";

function Done() {
  const task = useSelector((state) => state.done.done);
  const [currentRadioValue, setCurrentRadioValue] = React.useState();
  const dispatch = useDispatch();
  const handleRadioChange = (e) => {
    setCurrentRadioValue(e.id);
    dispatch(doneActions.doneDeleteUser(e.id));
  };

  return (
    task.map((todo) => (
      <div
        key={todo.id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "0.5px solid black",
        }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
        >
          <div>
            <input type="radio" id="inputTag" value={currentRadioValue} onClick={() => handleRadioChange(todo)} style={{ width: "30px", height: "30px" }} />
          </div>
          <div style={{
            display: "flex", flexDirection: "column", gap: "9px",
          }}
          >
            <span style={{ fontSize: "xx-large" }}>
              {todo.tittle}
            </span>
            <input style={{ marginBottom: "10px" }} value={todo.date && todo.date.toLocaleDateString()} />
          </div>
        </div>
      </div>
    )));
}
export default Done;
