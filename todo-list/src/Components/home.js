/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
// import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
// import MailIcon from "@mui/icons-material/Mail";
import AddTask from "./AddTask";
import TodayDate from "./TodayDate";
import ProjectButton from "./ProjectButton";

import ListTask from "./ListTask";
import UpcomingTask from "./UpcomingTask";

const useStyle = makeStyles({
  button: {
    display: "flex",
    marginTop: "10px !important",
    width: "100%",
    gap: "80%",
    backgroundColor: "antiquewhite !important",
    color: "black !important",
    "&:hover": {
      backgroundColor: "lightgrey !important",

    },

  },
  button2: {
    display: "flex",
    justifyContent: "space-between !important",
    marginTop: "1px !important",
    width: "100%",
    textAlign: "left",
    color: "black !important",
    backgroundColor: "antiquewhite !important",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "lightgrey !important",

    },
  },
  selectTag: {
    display: "flex",
    justifyContent: "space-between !important",
    marginTop: "1px !important",
    width: "100%",
    height: "40px",
    textAlign: "left",
    color: "black !important",
    backgroundColor: "antiquewhite !important",
    boxShadow: "none",
    borderColor: "none",
    border: "none",
    fontSize: ".9rem",
    padding: "2px 5px",
    "&:hover": {
      backgroundColor: "white !important",

    },
  },
});
const option = [
  { name: "priority4" },
  { name: "priority3" },
  { name: "priority2" },
  { name: "priority1" },
];
function Home() {
  const task = useSelector((state) => state.todos.todos);
  const [open, setOpen] = React.useState(false);
  const [isopen, setIsOpen] = React.useState(true);
  const [isToday, setIsToday] = React.useState(false);
  const [calender, setCalender] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [isUpCome, setIsUpCome] = React.useState(false);
  const [isProjectOpen, setIsProjectOpen] = React.useState(false);
  // const [opens, setOpens] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState("");
  // const [role, setRole] = React.useState("");

  const [isTodayDate, setIsTodayDate] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dateHandler = () => {
    setIsToday(true);
    setIsOpen(false);
    setIsUpCome(false);
    setCalender(false);
    setValue("");
  };
  const inboxHandler = () => {
    setIsOpen(true);
    setIsToday(false);
    setIsUpCome(false);
    setCalender(false);
    setValue("");
    setIsProjectOpen(false);
  };
  const filterHandler = () => {
    setCalender(true);
  };
  const projectHandler = () => {
    setIsProjectOpen(true);
  };
  const optionList = option.map((item) => (
    <option value={item.name}>{item.name}</option>
  ));

  const handleCelander = (e) => {
    setValue(e);
    if (e !== "") {
      const newList = task.filter((t) => t.date === new Date(e).toLocaleDateString());
      setIsUpCome(true);
      setIsOpen(false);

      setIsTodayDate(newList);
      console.log(newList);
    }
  };
  const classes = useStyle();

  return (
    <div>
      {open ? (
        <Dialog
          sx={{
            width: "45%",
            margin: "25px auto",
          }}
          open={open}
          onClose={handleClose}
        >
          <AddTask />

        </Dialog>
      ) : (
        <div style={{
          margin: "80px auto",
          border: "1px solid black",
          width: "80%",
          height: "500px",
          display: "flex",
        }}
        >
          <div style={{
            width: "30%",
            height: "100%",
            paddingLeft: "6px",
            paddingRight: "3px",
            boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          >
            <Button className={classes.button} onClick={inboxHandler}>
              Inbox
              <Badge badgeContent={task.length} className={classes.baged} color="primary" />
            </Button>
            <Button className={classes.button2} onClick={dateHandler}>Today</Button>
            <Button className={classes.button2}>
              Upcoming
              <CalendarTodayIcon onClick={filterHandler} />
            </Button>
            {calender ? (
              <LocalizationProvider className={classes.button2} dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Filter By Date"
                  value={value}
                  onChange={(newValue) => handleCelander(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth sx={{ marginTop: "10px", color: "GrayText" }} />}
                />
              </LocalizationProvider>
            ) : null}
            <select className={classes.selectTag}>
              { optionList}
            </select>
            <Button className={classes.button2} onClick={projectHandler}>Project</Button>
            {isProjectOpen ? (<ProjectButton />) : null}
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
          >
            <div
              style={{
                borderBottom: "1px solid black",
                minHeight: "80px",
                display: "flex",
                alignItems: "center",
                marginLeft: "5px",
                paddingLeft: "85%",
              }}
            >
              <Button onClick={handleClickOpen} variant="contained">
                Add Task
              </Button>
            </div>
            <div
              style={{
                width: "60%",
                overflow: "scroll",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2);",
              }}
            >
              {isopen ? (
                <ListTask />
              ) : ("") }
              {isToday ? (<TodayDate />) : null}
              {isUpCome ? (<UpcomingTask upCome={isTodayDate} />) : null}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
export default Home;
