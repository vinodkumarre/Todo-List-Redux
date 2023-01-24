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
          marginLeft: "15px",
          marginTop: "15px",
          height: "60px",
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
            display: "flex", flexDirection: "column", gap: "4px",
          }}
          >
            <span style={{ fontSize: "x-large" }}>
              {todo.tittle}
            </span>
            <div style={{
              display: "flex", gap: "40px", alignItems: "center", height: "20px",
            }}
            >
              <input style={{ width: "70px", height: "20px" }} value={todo.date && todo.date.toLocaleDateString()} />
            </div>

          </div>
        </div>
      </div>
    )));
}
export default Done;
