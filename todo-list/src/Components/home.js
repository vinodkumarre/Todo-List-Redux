/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
// import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DialogActions from "@mui/material/DialogActions";
import AddIcon from "@mui/icons-material/Add";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import MailIcon from "@mui/icons-material/Mail";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import AddTask from "./AddTask";
import TodayDate from "./TodayDate";
import { projectActions } from "../Store/project";
// import { todoActions } from "../Store/todo";

// import ProjectButton from "./ProjectButton";
import ProjectListView from "./projectListView";
import ListTask from "./ListTask";
import UpcomingTask from "./UpcomingTask";
import PrioritySelector from "./prioritySelector";
// import ProjectAddTittle from "./ProjectAddTittle";
// import DialogBox from "./DialogBox";

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
  dialog: {
    margin: "25px auto",
    "&:div": {
      width: "60%",

    },
  },
});

function Home() {
  const task = useSelector((state) => state.todos.todos);
  const projectTittles = useSelector((state) => state.project.names);
  console.log(projectTittles);
  console.log(task);

  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [isopen, setIsOpen] = React.useState(true);
  const [isToday, setIsToday] = React.useState(false);
  const [calender, setCalender] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [isUpCome, setIsUpCome] = React.useState(false);
  const [isProjectOpen, setIsProjectOpen] = React.useState(false);
  const [ProjectButton, setProjectButton] = React.useState(false);
  const [isProjectPage, setIsProjectPage] = React.useState(false);
  const [projectTittle, setProjectTittle] = React.useState();
  const [projectAdd, setProjectAdd] = React.useState();
  const [isPriority, setIsPriority] = React.useState();
  const [selectors, setSelectors] = React.useState(false);
  // const [opens, setOpens] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState("");
  // const [role, setRole] = React.useState("");

  const [isTodayDate, setIsTodayDate] = React.useState();
  const [name, setName] = React.useState("");
  const [passName, setPassName] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const dispatch = useDispatch();
  const handleText = (e) => {
    setName(e.target.value);
  };
  const addHandler = () => {
    console.log(name);
    if (name !== "") {
      dispatch(projectActions.project({
        name,
      }));
      setName("");
      setProjectButton(true);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloses = () => {
    setOpens(false);
  };
  const dateHandler = () => {
    setIsToday(true);
    setIsOpen(false);
    setIsUpCome(false);
    setCalender(false);
    setValue("");
    setProjectButton(false);
    setSelectors(false);
    setIsProjectPage(false);
  };
  const inboxHandler = () => {
    setIsOpen(true);
    setIsToday(false);
    setIsUpCome(false);
    setCalender(false);
    setValue("");
    setProjectButton(false);
    setSelectors(false);
    setIsProjectPage(false);
  };
  const handleCelander = (e) => {
    setValue(e);
    if (e !== "") {
      const newList = task.filter((t) => t.date === new Date(e).toLocaleDateString());
      setIsUpCome(true);
      setIsOpen(false);
      setSelectors(false);
      setIsTodayDate(newList);
      console.log(newList);
    }
  };
  const handleChange = (e) => {
    setPriority(e.target.value);
    if (e.target.value !== "") {
      const newList = task.filter((t) => t.priority === e.target.value);
      setIsUpCome(false);
      setIsOpen(false);
      setSelectors(true);
      setIsPriority(newList);
      console.log(newList);
    }
  };
  const filterHandler = () => {
    setCalender(true);
  };
  const projectHandler = () => {
    setIsProjectOpen(true);
    setOpens(true);
  };
  const projectTittleHandler = () => {
    setProjectButton(true);
  };
  const projectPage = (e) => {
    console.log(e);
    setProjectAdd(e);
    setPassName(e.name);

    // const proj = projectTittles.filter((y) => y.name === e.name);
    // console.log(proj);
    setProjectTittle(e.todos);
    setIsProjectPage(true);
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
          <AddTask headTittle={passName} />

        </Dialog>
      ) : (
        <div style={{
          margin: "80px auto",
          border: "1px solid black",
          width: "60%",
          height: "500px",
          display: "flex",
          gap: "10px",
        }}
        >
          <div style={{
            // width: "30%",
            height: "100%",
            paddingLeft: "3px",
            paddingRight: "3px",
            boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            overflow: "scroll",
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
            <FormControl
              fullWidth
              sx={{
                marginTop: "5px", marginBottom: "10px", border: "none", padding: "0px",
              }}
            >
              <InputLabel placeholder="priority" />
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
            <Button className={classes.button2} onClick={projectTittleHandler}>
              Project
              {" "}
              <AddCircleOutlinedIcon onClick={projectHandler} />
            </Button>
            {ProjectButton ? (projectTittles.map((item) => <Button className={classes.button2} onClick={() => projectPage(item)}>{item.name}</Button>)
            ) : null}
            {isProjectOpen ? (
              <Dialog
                className={classes.dialog}
                open={opens}
                onClose={handleCloses}
              >
                <DialogTitle id="alert-dialog-title">
                  <h4 style={{
                    paddingLeft: "50px",
                  }}
                  >
                    Add Name
                  </h4>
                </DialogTitle>
                <DialogContent>
                  <TextField fullWidth label="Tittle" value={name} onChange={handleText} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={addHandler} variant="contained" color="success" sx={{ margin: "10px", float: "right" }}>Add</Button>
                </DialogActions>
              </Dialog>
            ) : null}
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            gap: "10px",
          }}
          >
            {isProjectPage ? (
              <>
                <div
                  style={{
                    borderBottom: "1px solid black",
                    minHeight: "80px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "5%",
                  }}
                >
                  <h2>{projectAdd.name}</h2>
                </div>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "10px",
                  width: "60%",
                  // borderBottom: "0.5px solid black",
                  // backgroundColor: "antiquewhite",

                }}
                >
                  <ProjectListView projectList={projectTittle} />
                  <Button
                    onClick={handleClickOpen}
                    sx={{
                      marginTop: "10px", width: "30%", height: "30%", marginLeft: "20px",
                    }}
                  >
                    Add Task
                  </Button>
                </div>

              </>

            ) : (
              <>
                <div
                  style={{
                    borderBottom: "1px solid black",
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "5px",
                    paddingLeft: "80%",
                  }}
                >
                  <Button
                    onClick={handleClickOpen}
                    variant="outlined"
                    sx={{
                      backgroundColor: "#cc5647", padding: "3px", color: "whitesmoke",
                    }}
                  >
                    <AddIcon />
                    Add Task
                  </Button>
                </div>
                <div
                  style={{
                    width: "100%",
                    overflow: "scroll",
                  }}
                >
                  {isopen ? (
                    <ListTask />
                  ) : ("")}
                  {isToday ? (<TodayDate />) : null}
                  {isUpCome ? (<UpcomingTask upCome={isTodayDate} />) : null}
                  {selectors ? (<PrioritySelector priorityChange={isPriority} />) : null}
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </div>

  );
}
export default Home;
