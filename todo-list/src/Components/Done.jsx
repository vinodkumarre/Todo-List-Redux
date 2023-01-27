import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
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
  headerDiv: {
    display: "flex", flexDirection: "column", gap: "4px",
  },
  span: {
    fontSize: "x-large",
  },
  div: {
    display: "flex", gap: "40px", alignItems: "center", height: "20px",
  },
  input: {
    width: "70px", height: "20px",
  },

});
function Done() {
  const classes = useStyle();
  const task = useSelector((state) => state.done.done);
  return (
    task.map((todo) => (
      <div
        className={classes.container}
        key={todo.id}
      >
        <div
          className={classes.subContainer}
        >
          <div
            className={classes.headerDiv}
          >
            <span className={classes.span}>
              {todo.tittle}
            </span>
            <div
              className={classes.div}
            >
              <input
                className={classes.input}
                value={todo.date && todo.date}
              />
            </div>
          </div>
        </div>
      </div>
    )));
}
export default Done;
