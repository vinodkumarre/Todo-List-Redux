/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable eqeqeq */
// /* eslint-disable no-restricted-globals */
// /* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable max-len */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@mui/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DialogActions from "@mui/material/DialogActions";
import AddIcon from "@mui/icons-material/Add";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import AddTask from "./AddTask";
import TodayDate from "./TodayDate";
import { projectActions } from "../Store/project";
import ProjectListView from "./projectListView";
import ListTask from "./ListTask";
import UpcomingTask from "./UpcomingTask";
import PrioritySelector from "./prioritySelector";
import Done from "./Done";

const useStyle = makeStyles({
  button: {
    display: "flex",
    marginTop: "10px !important",
    width: "100%",
    gap: "80%",
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
  button3: {
    marginLeft: "70% !important",
    padding: "0px !important",
    color: "#cc5647 !important",
    paddingRight: "3px !important",
    backgroundColor: "white !important",
    "&:hover": {
      color: "white !important",
      backgroundColor: "#cc5647 !important",
    },
  },
  button4: {
    backgroundColor: "#cc5647 !important",
    color: "white !important",
    marginTop: "10px !important",
    width: "30% !important",
    height: "70% !important",
    marginLeft: "20px !important",
    padding: "0px !important",
    "&:hover": {
      backgroundColor: "white !important",
      color: "#cc5647 !important",
    },
  },
});

function Home() {
  const task = useSelector((state) => state.todos.todos);
  const doneCount = useSelector((state) => state.done.done);
  const projectTittles = useSelector((state) => state.project.names);
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [isopen, setIsOpen] = React.useState(true);
  const [isToday, setIsToday] = React.useState(false);
  const [calender, setCalender] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [isUpCome, setIsUpCome] = React.useState(false);
  const [ProjectButton, setProjectButton] = React.useState(false);
  const [isProjectPage, setIsProjectPage] = React.useState(false);
  const [projectTittle, setProjectTittle] = React.useState();
  const [projectAdd, setProjectAdd] = React.useState();
  const [isPriority, setIsPriority] = React.useState();
  const [selectors, setSelectors] = React.useState(false);
  const [isTodayDate, setIsTodayDate] = React.useState();
  const [name, setName] = React.useState("");
  const [passName, setPassName] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [isDelete, setIsDelete] = React.useState(false);
  const dispatch = useDispatch();
  const handleText = (e) => {
    setName(e.target.value);
  };
  const addHandler = () => {
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
    setIsDelete(false);
  };
  const handleCelander = (e) => {
    setValue(e);
    if (e !== "") {
      const newList = task.filter((t) => t.date === new Date(e).toLocaleDateString());
      setIsUpCome(true);
      setIsOpen(false);
      setSelectors(false);
      setIsTodayDate(newList);
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
    }
  };
  const filterHandler = () => {
    setCalender(true);
  };
  const projectHandler = () => {
    setOpens(true);
  };
  const projectTittleHandler = () => {
    setProjectButton(true);
  };
  const projectPage = (e) => {
    setProjectAdd(e);
    setPassName(e.name);
    setProjectTittle(e.todos);
    setIsProjectPage(true);
  };
  const setHandler = () => {
    setIsDelete(true);
    setIsOpen(false);
  };
  const classes = useStyle();

  return (
    <>
      <Modal
        sx={{
          width: "45%",
          // top: "0px !important",
          position: "none",
          margin: "15% auto",
        }}
        open={open}
        // onClose={handleClose}
      >
        <Box>
          <AddTask headTittle={passName} handClose={handleClose} />
        </Box>

      </Modal>
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
      <div style={{
        margin: "80px auto",
        border: "1px solid black",
        width: "60%",
        height: "500px",
        gap: "10px",
      }}
      >
        <div
          style={{
            borderBottom: "1px solid black",
            minHeight: "50px",
            display: "flex",
            alignItems: "center",
            // paddingLeft: "85%",
            backgroundColor: "#cc5647",
          }}
        >
          <MenuIcon sx={{ color: "whitesmoke", paddingLeft: "10px" }} />
          <HomeIcon sx={{ color: "whitesmoke", paddingLeft: "10px" }} />
          <Button
            onClick={handleClickOpen}
            variant="outlined"
            className={classes.button3}
          >
            <AddIcon />
            Add Task
          </Button>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="white"
            sx={{ color: "whitesmoke", paddingLeft: "30px" }}
          >
            <AccountCircle />
          </IconButton>
        </div>
        <div style={{
          width: "100%",
          display: "flex",
          height: "450px",
          gap: "10px",
        }}
        >
          <div style={{
            width: "30%",
            paddingLeft: "3px",
            paddingRight: "3px",
            boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            overflow: "hidden",
          }}
          >
            <Button className={classes.button} onClick={inboxHandler}>
              Inbox
              <Badge badgeContent={task.length} className={classes.baged} color="primary" />
            </Button>
            <Button className={classes.button2} onClick={dateHandler}>Today</Button>
            <Button className={classes.button2} onClick={setHandler}>
              done
              <Badge badgeContent={doneCount.length} className={classes.baged} color="primary" />
            </Button>
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
              <InputLabel> Select priority </InputLabel>
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
            {ProjectButton ? (projectTittles.map((item) => <Button className={classes.button2} onClick={() => projectPage(item)}>{item.name}</Button>)) : null}
          </div>
          <div style={{
            width: "70%",
            overflow: "scroll",
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
                    width: "95%",
                    position: "static !important",

                  }}
                >
                  <h2>{projectAdd.name}</h2>
                </div>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "10px",
                  overflow: "scroll",
                }}
                >
                  <ProjectListView projectList={projectTittle} />
                  <div style={{
                    width: "60%",
                    marginBottom: "10px",
                  }}
                  >
                    <Button
                      onClick={handleClickOpen}
                      className={classes.button4}
                    >
                      <AddIcon />
                      Add Task
                    </Button>
                  </div>
                </div>

              </>

            ) : (
              <div
                style={{
                  width: "100%",
                }}
              >
                {isopen ? (
                  <ListTask projectName={passName} />
                ) : ("")}
                {isToday ? (<TodayDate />) : null}
                {isUpCome ? (<UpcomingTask upCome={isTodayDate} />) : null}
                {selectors ? (<PrioritySelector priorityChange={isPriority} />) : null}
                {isDelete ? (<Done />) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

// {open ? (
//       ) : (
//         <div style={{
//           margin: "80px auto",
//           border: "1px solid black",
//           width: "60%",
//           height: "500px",
//           display: "flex",
//           gap: "10px",
//         }}
//         >
//

//             ) : null}
//             {isProjectOpen ? (
//               <Dialog
//                 className={classes.dialog}
//                 open={opens}
//                 onClose={handleCloses}
//               >
//                 <DialogTitle id="alert-dialog-title">
//                   <h4 style={{
//                     paddingLeft: "50px",
//                   }}
//                   >
//                     Add Name
//                   </h4>
//                 </DialogTitle>
//                 <DialogContent>
//                   <TextField fullWidth label="Tittle" value={name} onChange={handleText} />
//                 </DialogContent>
//                 <DialogActions>
//                 </DialogActions>
//               </Dialog>
//             ) : null}
//           </div>
//           <div style={{
//             display: "flex",
//             flexDirection: "column",
//             width: "100%",
//             height: "100%",
//             gap: "10px",
//           }}
//           >

//     </div>
