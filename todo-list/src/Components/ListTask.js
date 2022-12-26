import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Dialog from "@mui/material/Dialog";
import Edit from "./Edit";
import { todoActions } from "../Store/todo";

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
    setCurrentRadioValue(e);
    dispatch(todoActions.deleteUser(e));
    console.log(e);
  };

  return (
    <div>
      {open ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Edit editList={edit} />
        </Dialog>
      ) : (
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
                <input type="radio" id="inputTag" value={currentRadioValue} onClick={() => handleRadioChange(todo.id)} style={{ width: "30px", height: "30px" }} />
              </div>
              <div style={{
                display: "flex", flexDirection: "column", gap: "9px",
              }}
              >
                <span style={{ fontSize: "xx-large" }}>
                  {todo.tittle}
                </span>
                <input style={{ marginBottom: "10px" }} value={todo.date} />
              </div>
            </div>
            <div style={{ paddingRight: "10px" }}>
              <Button onClick={() => handleClickOpen(todo.id)}>
                <ModeEditOutlineOutlinedIcon />
              </Button>
            </div>
          </div>
        ))
      ) }
    </div>

  );
}
export default ListTask;
