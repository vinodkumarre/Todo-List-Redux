/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ToastContainer, toast } from "react-toastify";
import { todoActions } from "../Store/todo";
import "react-toastify/dist/ReactToastify.css";

const useStyle = makeStyles({
  containerDiv: {
    height: "40%",
    marginTop: "15px",
    marginLeft: "20px",
    marginRight: "20px",
    width: "90%",
    display: "block",
    border: "1px solid black",
    borderRadius: "15px",
  },
  button: {
    float: "right",
    backgroundColor: "#cc5647 !important",
    color: "white !important",
    "&:hover": {
      backgroundColor: "white !important",
      color: "#cc5647 !important",
    },
  },
  buttonDiv: {
    width: "90%",
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "20px",
    height: "10%",
    display: "flex",
    paddingLeft: "48%",
    gap: "10px",
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
});

function Edit(props) {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [priority, setPriority] = React.useState("");
  const dispatch = useDispatch();

  const listItem = useSelector((state) => state.todos.todos);

  const list = listItem.filter((todoItem) => todoItem.id === props.editList);
  useEffect(() => {
    if (list) {
      setDescription(list[0].description);
      setTittle(list[0].tittle);
      setValue(list[0].date);
      setPriority(list[0].priority);
    }
  }, []);
  const tittleHandler = (e) => {
    setTittle(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const handleChange = (event) => {
    setPriority(event.target.value);
  };
  const editHandler = () => {
    if (tittle !== "") {
      dispatch(todoActions.editUser({
        tittle,
        description,
        id: props.editList,
        date: new Date(value),
        priority,
      }));
      toast("Task is Edited successfully");
    }
  };
  const classes = useStyle();

  return (
    <>
      <ToastContainer />
      <div className={classes.containerDiv}>
        <TextField className={classes.textFiled} placeholder="Add Tittle" value={tittle} onChange={tittleHandler} />
        <TextField
          className={classes.textFiled}
          value={description}
          placeholder="Description"
          onChange={descriptionHandler}
        />
        <div style={{
          display: "flex",
          gap: "20px",
        }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={new Date(value)}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} className={classes.dateTextFiled} />}
            />
          </LocalizationProvider>
          <FormControl className={classes.dateTextFiled}>
            <InputLabel />
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
      </div>
      <div className={classes.buttonDiv}>
        <Button className={classes.button} variant="outlined" onClick={props.handClose}>close</Button>
        <Button className={classes.button} variant="outlined" onClick={editHandler}>Edit Task</Button>
      </div>
    </>
  );
}
export default Edit;
