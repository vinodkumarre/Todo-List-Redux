import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  button2: {
    display: "flex",
    justifyContent: "space-between !important",
    marginTop: "1px !important",
    width: "100%",
    textAlign: "left",
    color: "black !important",
    backgroundColor: "lightgrey !important",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "white !important",

    },
  },
});
function ProjectButton() {
  const task = useSelector((state) => state.todos.todos);
  const classes = useStyle();

  return (
    <div>
      {task.map((item) => (
        <Button key={item.id} className={classes.button2}>{item.tittle}</Button>
      ))}
    </div>
  );
}
export default ProjectButton;
