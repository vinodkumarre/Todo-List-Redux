/* eslint-disable react/destructuring-assignment */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Dialog from "@mui/material/Dialog";
import { ToastContainer, toast } from "react-toastify";
import Edit from "./Edit";
import { todoActions } from "../Store/todo";
import { doneActions } from "../Store/doneReducer";

import "react-toastify/dist/ReactToastify.css";

function ListTask() {
  const task = useSelector((state) => state.todos.todos);
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState();
  const [currentRadioValue, setCurrentRadioValue] = React.useState();
  const dispatch = useDispatch();

  const handleClickOpen = (id) => {
    setOpen(true);
    setEdit(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRadioChange = (e) => {
    setCurrentRadioValue(e.id);
    dispatch(todoActions.deleteUser(e.id));
    dispatch(doneActions.doneUser(e));
    toast("Task moved to Done Section Successfully");
  };

  return (
    <div>
      {task.map((todo) => (
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
          <div style={{ paddingRight: "10px" }}>
            <Button onClick={() => handleClickOpen(todo.id)}>
              <ModeEditOutlineOutlinedIcon />
            </Button>
          </div>
        </div>
      ))}
      <ToastContainer />
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Edit editList={edit} handClose={handleClose} />
      </Dialog>
    </div>

  );
}
export default ListTask;
