import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import Edit from "./Edit";

function ListTask() {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState();

  const handleClickOpen = (id) => {
    setOpen(true);
    setEdit(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const task = useSelector((state) => state.todos.todos);
  console.log(task.length);

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
          <div style={{
            margin: "15px",
            border: "2px solid green",
            height: "10vh",
            width: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            >
              <div>
                <input type="Checkbox" style={{ width: "40px", height: "40px" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", paddingLeft: "25px" }}>
                <span>
                  Tittle:
                  {todo.tittle}
                </span>
                <input value={todo.date} style={{ marginTop: "15px" }} />
              </div>
            </div>
            <div style={{ paddingRight: "10px" }}>
              <Button variant="contained" color="success" onClick={() => handleClickOpen(todo.id)}><EditIcon /></Button>
            </div>
          </div>
        ))
      ) }
    </div>

  );
}
export default ListTask;
