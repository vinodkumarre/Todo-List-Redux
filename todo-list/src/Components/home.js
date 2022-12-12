import React from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@mui/styles";
import AddTask from "./AddTask";

import ListTask from "./ListTask";

const useStyle = makeStyles({
  button: {
    textAlign: "left !important",
    marginTop: "60px !important",
    width: "100%",
    backgroundColor: "lightBlue !important",
    color: "black !important",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "antiquewhite !important",

    },
  },
  button2: {
    marginTop: "10px !important",
    width: "100%",
    textAlign: "left",
    backgroundColor: "lightBlue !important",
    color: "black !important",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "antiquewhite !important",

    },

  },
});
function Home() {
  const [open, setOpen] = React.useState(false);
  const [isopen, setIsOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const inboxHandler = () => {
    setIsOpen(true);
  };
  const classes = useStyle();

  return (
    <div>
      {open ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <AddTask />

        </Dialog>
      ) : (
        <div style={{
          margin: "25px auto",
          border: "2px solid green",
          width: "80%",
          height: "80vh",
          display: "flex",
        }}
        >
          <div style={{
            width: "30%",
            padding: "6px",
            borderRight: "1px solid black",
          }}
          >
            <Button className={classes.button} onClick={inboxHandler}>Inbox</Button>
            <Button className={classes.button2} color="success">Filter By Date</Button>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            height: "80vh",

          }}
          >
            <div style={{
              borderBottom: "1px solid black",
              height: "60px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "85%",

            }}
            >
              <Button onClick={handleClickOpen} variant="contained" sx={{}}>
                Add Task
              </Button>
            </div>
            {isopen ? (
              <div>
                <ListTask />
              </div>
            ) : (
              <div>
                <ListTask />
              </div>
            ) }

          </div>
        </div>
      )}

    </div>
  );
}
export default Home;
