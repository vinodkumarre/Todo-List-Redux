import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@mui/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./Edit";
import { todoActions } from "../Store/Todo";
import { doneActions } from "../Store/DoneReducer";

const useStyles = makeStyles({
  divContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "0.5px solid black",
    marginLeft: "15px",
    marginTop: "15px",
    height: "60px",
  },
  divSubContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",

  },
  tittleContainer: {
    display: "flex", flexDirection: "column", gap: "4px",
  },
  span: {
    fontSize: "x-large",
  },
  dateContainer: {
    display: "flex", gap: "40px", alignItems: "center", height: "20px",
  },
  dateView: {
    width: "70px", height: "20px",
  },
  check: {
    width: "30px", height: "30px",
  },
  buttonDiv: {
    paddingRight: "10px",
  },
});

function ProjectListView(props) {
  const classes = useStyles();
  const task = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const d = task.filter((v) => {
    const fu = props.projectList.todos && props.projectList.todos.find((f) => f.id === v.id);
    if (fu) {
      return true;
    }
    return false;
  });
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState();
  const [currentRadioValue, setCurrentRadioValue] = React.useState();

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
      {d.map((todo) => (
        <div
          key={todo.id}
          className={classes.divContainer}
        >
          <div className={classes.divSubContainer}>
            <div>
              <input type="checkBox" id="inputTag" value={currentRadioValue} onClick={() => handleRadioChange(todo)} className={classes.check} />
            </div>
            <div className={classes.tittleContainer}>
              <span className={classes.span}>
                {todo.tittle}
              </span>
              <div className={classes.dateContainer}>
                <input
                  className={classes.dateView}
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
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Edit editList={edit} handClose={handleClose} />
      </Dialog>
    </div>

  );
}
export default ProjectListView;
