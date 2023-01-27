import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Dialog from "@mui/material/Dialog";
import { ToastContainer, toast } from "react-toastify";
import { makeStyles } from "@mui/styles";
import Edit from "./Edit";
import { todoActions } from "../Store/Todo";
import { doneActions } from "../Store/DoneReducer";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "0.5px solid black",
    marginLeft: "15px",
    marginTop: "15px",
    height: "60px",
  },
  subContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },
  subDiv: {
    display: "flex", flexDirection: "column", gap: "4px",
  },
  span: {
    fontSize: "x-large",
  },
  div: {
    display: "flex", gap: "40px", alignItems: "center", height: "20px",
  },
  buttonDiv: {
    paddingRight: "10px",
  },
  dateList: {
    width: "70px", height: "20px",
  },
  check: {
    width: "30px", height: "30px",
  },

});

function ListTask() {
  const classes = useStyles();
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
          className={classes.container}
          key={todo.id}
        >
          <div
            className={classes.subContainer}
          >
            <div>
              <input type="checkBox" id="inputTag" value={currentRadioValue} onClick={() => handleRadioChange(todo)} className={classes.check} />
            </div>
            <div
              className={classes.subDiv}
            >
              <span className={classes.span}>
                {todo.tittle}
              </span>
              <div
                className={classes.div}
              >
                <input
                  className={classes.dateList}
                  value={todo.date && todo.date}
                />
              </div>
            </div>
          </div>
          <div className={classes.buttonDiv}>
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
