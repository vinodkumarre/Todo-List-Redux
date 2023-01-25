import React from "react";
import { useDispatch } from "react-redux";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@mui/styles";
import Edit from "./Edit";
import { todoActions } from "../Store/todo";
import { doneActions } from "../Store/doneReducer";

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

});
function UpcomingTask(props) {
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
  };

  return (
    <div>
      {props.upCome.map((todo) => (
        <div
          key={todo.id}
          className={classes.container}

        >
          <div className={classes.subContainer}>
            <div>
              <input type="checked" id="inputTag" value={currentRadioValue} onClick={() => handleRadioChange(todo)} style={{ width: "30px", height: "30px" }} />
            </div>
            <div className={classes.subDiv}>
              <span className={classes.span}>
                {todo.tittle}
              </span>
              <div className={classes.div}>
                <input style={{ width: "70px", height: "20px" }} value={todo.date && todo.date.toLocaleDateString()} />
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
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <Edit editList={edit} handClose={handleClose} />
      </Dialog>
    </div>

  );
}
export default UpcomingTask;
