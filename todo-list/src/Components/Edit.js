/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { todoActions } from "../Store/todo";

function Edit(props) {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const listItem = useSelector((state) => state.todos.todos);

  const list = listItem.filter((todoItem) => todoItem.id === props.editList);
  useEffect(() => {
    if (list) {
      setDescription(list[0].description);
      setTittle(list[0].tittle);
      setValue(list[0].date);
    }
  }, []);
  const tittleHandler = (e) => {
    setTittle(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const editHandler = () => {
    if (tittle !== "") {
      dispatch(todoActions.editUser({
        tittle,
        description,
        id: props.editList,
        date: value,
      }));
    }
  };

  return (
    <>
      <div style={{
        margin: "15px auto",
        width: "80%",
        paddingLeft: "40%",
      }}
      >
        <h3>Edit Task</h3>

      </div>
      <div style={{
        height: "80%", margin: "auto", width: "80%", display: "block",
      }}
      >
        <TextField fullWidth label="Tittle" sx={{ marginTop: "10px" }} value={tittle} onChange={tittleHandler} />
        <TextareaAutosize
          value={description}
          placeholder="Description"
          fullWidth
          onChange={descriptionHandler}
          style={{
            resize: "none", height: "60px", marginTop: "10px", width: "-webkit-fill-available", borderRadius: "4px",
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="pick Date"
            value={new Date(value)}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} fullWidth sx={{ marginTop: "10px", color: "GrayText" }} />}
          />
        </LocalizationProvider>
        <Button variant="contained" onClick={editHandler} color="success" sx={{ margin: "10px", float: "right" }}>Add</Button>
      </div>
    </>
  );
}
export default Edit;
