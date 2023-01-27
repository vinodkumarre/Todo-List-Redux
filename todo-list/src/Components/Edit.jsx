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
import { todoActions } from "../Store/Todo";
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
  div: {
    display: "flex",
    gap: "20px",
  },
});

function Edit(props) {
  const classes = useStyle();
  const [prev, setPrev] = useState({
    tittle: "",
    description: "",
    value: "",
    priority: "",
  });
  const dispatch = useDispatch();

  const listItem = useSelector((state) => state.todos.todos);

  const list = listItem.filter((todoItem) => todoItem.id === props.editList);
  useEffect(() => {
    if (list) {
      setPrev({
        tittle: list[0].tittle,
        description: list[0].description,
        value: list[0].date,
        priority: list[0].priority,
      });
    }
  }, []);
  const tittleHandler = (e) => {
    setPrev({
      ...prev,
      tittle: e.target.value,
    });
  };
  const descriptionHandler = (e) => {
    setPrev({
      ...prev,
      description: e.target.value,
    });
  };
  const handleChange = (event) => {
    setPrev({
      ...prev,
      priority: event.target.value,
    });
  };
  const editHandler = () => {
    if (prev.tittle !== "") {
      dispatch(todoActions.editUser({
        tittle: prev.tittle,
        description: prev.description,
        id: props.editList,
        date: new Date(prev.value).toLocaleString(),
        priority: prev.priority,
      }));
      toast("Task is Edited successfully");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className={classes.containerDiv}>
        <TextField className={classes.textFiled} placeholder="Add Tittle" value={prev.tittle} onChange={tittleHandler} />
        <TextField
          className={classes.textFiled}
          value={prev.description}
          placeholder="Description"
          onChange={descriptionHandler}
        />
        <div
          className={classes.div}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={new Date(prev.value)}
              onChange={(newValue) => {
                setPrev({
                  ...prev,
                  value: newValue,
                });
              }}
              renderInput={(params) => <TextField {...params} className={classes.dateTextFiled} />}
            />
          </LocalizationProvider>
          <FormControl className={classes.dateTextFiled}>
            <InputLabel />
            <Select
              value={prev.priority}
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
