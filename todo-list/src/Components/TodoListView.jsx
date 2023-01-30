import React from "react";
import { useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { makeStyles } from "@mui/styles";
import "react-toastify/dist/ReactToastify.css";
import { doneActions } from "../Store/DoneReducer";
import { todoActions } from "../Store/Todo";
import Edit from "./Edit";

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
    display: "flex", gap: "40px", alignItems: "center", height: "20px", border: "1px solid",
  },
  buttonDiv: {
    paddingRight: "10px",
  },
  dateList: {
    height: "20px",
  },
  check: {
    width: "30px", height: "30px",
  },

});

function TodoListView(props) {
  const classes = useStyles();
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
    <>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <div>
            <input type="checkBox" id="inputTag" value={currentRadioValue} onClick={() => handleRadioChange(props.Todo)} className={classes.check} />
          </div>
          <div
            className={classes.subDiv}
          >
            <span className={classes.span}>
              {props.Todo.tittle}
            </span>
            <div
              className={classes.div}
            >
              <h4 className={classes.dateList}>{props.Todo.date.toLocaleString()}</h4>
            </div>
          </div>
        </div>
        <div className={classes.buttonDiv}>
          <Button onClick={() => handleClickOpen(props.Todo.id)}>
            <ModeEditOutlineOutlinedIcon />
          </Button>
        </div>
      </div>
      <ToastContainer />
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Edit editList={edit} handClose={handleClose} />
      </Dialog>
    </>
  );
}
export default TodoListView;
