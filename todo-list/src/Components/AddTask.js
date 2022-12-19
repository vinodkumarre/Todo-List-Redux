/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
// import { Dayjs } from "dayjs";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { todoActions } from "../Store/todo";

let counter = 0;

function AddTask() {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [tittleText, setTittleText] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleText = (e) => {
    setTittle(e.target.value);
    if (e.target.value !== "") {
      setTittleText("");
    } else {
      setTittleText("please enter the tittle");
    }
  };
  const addHandler = () => {
    counter += 1;
    if (tittle !== "") {
      dispatch(todoActions.addUser({
        tittle,
        description,
        id: counter,
        date: new Date(value).toLocaleDateString(),
        priority: "priority4",
      }));
      setDescription("");
      setTittle("");
      setValue("");
    } else {
      setTittleText("please enter Tittle");
    }
  };
  return (
    <>
      <div style={{
        marginTop: "15px",
        width: "50%",
        paddingLeft: "40%",
      }}
      >
        <h2>Add Task</h2>

      </div>
      <div style={{
        height: "60%",
        margin: "auto",
        width: "50%",
        display: "block",
      }}
      >
        <TextField fullWidth label="Tittle" value={tittle} onChange={handleText} helperText={tittleText} sx={{ marginTop: "10px" }} />
        <TextareaAutosize
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          fullWidth
          style={{
            resize: "none", height: "60px", marginTop: "10px", width: "-webkit-fill-available", borderRadius: "4px", padding: "15px",
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="pick Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} fullWidth sx={{ marginTop: "10px", color: "GrayText" }} />}
          />
        </LocalizationProvider>
        <Button onClick={addHandler} variant="contained" color="success" sx={{ margin: "10px", float: "right" }}>Add</Button>
      </div>
    </>
  );
}
export default AddTask;
