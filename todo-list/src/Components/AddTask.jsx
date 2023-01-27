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
import { projectActions } from "../Store/Project";
import { todoActions } from "../Store/Todo";
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
  div: {
    display: "flex",
    gap: "20px",

  },

});

function AddTask(props) {
  const classes = useStyle();
  const [tittleText, setTittleText] = useState("");
  const [prev, setPrev] = useState({
    tittle: "",
    description: "",
    value: "",
    priority: "",
  });

  const dispatch = useDispatch();
  const handleText = (e) => {
    setPrev({
      ...prev,
      tittle: e.target.value,
    });
    if (e.target.value !== "") {
      setTittleText("");
    } else {
      setTittleText("please enter the tittle");
    }
  };
  const handleChange = (event) => {
    setPrev({
      ...prev,
      priority: event.target.value,
    });
  };
  const addHandler = () => {
    if (prev.tittle !== "") {
      const tempId = (new Date()).getTime().toString(36);
      dispatch(todoActions.addUser({
        tittle: prev.tittle,
        description: prev.description,
        id: tempId,
        date: new Date(prev.value).toLocaleString(),
        priority: prev.priority,
      }));
      setPrev({
        tittle: "",
        description: "",
        value: "",
        priority: "",

      });
      dispatch(projectActions.projectAddUser({
        name: props.headTittle,
        newTodo: {
          id: tempId,
        },
      }));
      toast("Task is added successfully");
    } else {
      setTittleText("please enter Tittle");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className={classes.containerDiv}>
        <TextField
          className={classes.textFiled}
          placeholder="Add Tittle"
          value={prev.tittle}
          onChange={handleText}
          helperText={tittleText}
        />
        <TextField
          className={classes.textFiled}
          value={prev.description}
          onChange={(e) => setPrev({
            ...prev,
            description: e.target.value,
          })}
          placeholder="Description"
        />
        <div className={classes.div}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={prev.value}
              onChange={(newValue) => {
                setPrev({
                  ...prev,
                  value: newValue,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  // value={isDate}
                  className={classes.dateTextFiled}
                />
              )}
            />
          </LocalizationProvider>
          <FormControl className={classes.dateTextFiled1}>
            <InputLabel> Select priority </InputLabel>
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
        <div className={classes.buttonDiv}>
          <Button
            className={classes.button}
            variant="outlined"
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
