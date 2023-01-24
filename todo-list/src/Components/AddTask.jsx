/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ToastContainer, toast } from "react-toastify";
import { projectActions } from "../Store/project";
import { todoActions } from "../Store/todo";
import "react-toastify/dist/ReactToastify.css";

const useStyle = makeStyles({
  button: {
    float: "right",
    backgroundColor: "#cc5647 !important",
    color: "white !important",
    "&:hover": {
      backgroundColor: "white !important",
      color: "#cc5647 !important",
    },
  },
  textFiled: {
    width: "100%",
    marginLeft: "20px !important",
    "& fieldset": { border: "none" },
    "& input": { height: "10px" },
    "& p": { color: "red" },
  },
  dateTextFiled: {
    marginBottom: "10px !important",
    paddingLeft: "15px !important",
    width: "40% !important",
    "& fieldset": { border: "1px solid #241a1a !important" },
  },
  dateTextFiled1: {
    marginBottom: "10px !important",
    paddingLeft: "15px !important",
    width: "40% !important",
    "& fieldset": { border: "1px solid #241a1a !important" },
    "& label": { paddingLeft: "10px" },
  },
  containerDiv: {
    height: "40%",
    marginTop: "15px",
    marginLeft: "20px",
    marginRight: "20px",
    width: "90%",
    display: "block",
    border: "1px solid black",
    borderRadius: "15px",
    backgroundColor: "whitesmoke",
  },
  buttonDiv: {
    width: "90%",
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "20px",
    height: "10%",
    display: "flex",
    paddingLeft: "53%",
    gap: "10px",
  },

});

function AddTask(props) {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [tittleText, setTittleText] = useState("");
  const [value, setValue] = useState("");
  const [isDate, setIsDate] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();
  const handleText = (e) => {
    setTittle(e.target.value);
    if (e.target.value !== "") {
      setTittleText("");
    } else {
      setTittleText("please enter the tittle");
    }
  };
  const handleChange = (event) => {
    setPriority(event.target.value);
  };
  const addHandler = () => {
    if (tittle !== "") {
      const tempId = (new Date()).getTime().toString(36);
      dispatch(todoActions.addUser({
        tittle,
        description,
        id: tempId,
        date: new Date(value),
        priority,
      }));
      setDescription("");
      setTittle("");
      setValue("");
      setIsDate("");
      setPriority("");
      dispatch(projectActions.projectAddUser({
        // eslint-disable-next-line react/destructuring-assignment
        name: props.headTittle,
        newTodo: {

          id: tempId,

        },
      }));
      toast("Task is add successfully");
    } else {
      setTittleText("please enter Tittle");
    }
  };
  const classes = useStyle();
  return (
    <>
      <ToastContainer />
      <div className={classes.containerDiv}>
        <TextField
          className={classes.textFiled}
          placeholder="Add Tittle"
          value={tittle}
          onChange={handleText}
          helperText={tittleText}
        />
        <TextField
          className={classes.textFiled}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <div style={{
          display: "flex",
          gap: "20px",
        }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  value={isDate}
                  className={classes.dateTextFiled}
                />
              )}
            />
          </LocalizationProvider>
          <FormControl className={classes.dateTextFiled1}>
            <InputLabel> Select priority </InputLabel>
            <Select
              value={priority}
              onChange={handleChange}
            >
              <MenuItem value="priority1">priority1</MenuItem>
              <MenuItem value="priority2">priority2</MenuItem>
              <MenuItem value="priority3">priority3</MenuItem>
              <MenuItem value="priority4">priority4</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.buttonDiv}>
          <Button
            className={classes.button}
            variant="outlined"
            // eslint-disable-next-line react/destructuring-assignment
            onClick={props.handClose}
          >
            close
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={addHandler}
          >
            Add Task
          </Button>
        </div>
      </div>
    </>
  );
}
export default AddTask;
