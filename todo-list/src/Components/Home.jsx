import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import Avatar from "@mui/material/Avatar";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import AddTask from "./AddTask";
import TodayDate from "./TodayDate";
import { projectActions } from "../Store/Project";
import ProjectListView from "./ProjectListView";
import ListTask from "./ListTask";
import UpcomingTask from "./UpcomingTask";
import PrioritySelector from "./PrioritySelector";
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
      boxShadow: "0.3em 0.3em 1em rgb(0 0 0 / 30%)",

    },
  },
  p: {
    display: "flex",
    justifyContent: "space-between !important",
    marginTop: "1px !important",
    width: "100%",
    boxShadow: "0.3em 0.3em 1em rgb(0 0 0 / 30%)",
    textAlign: "left",
    color: "black !important",
    "&:hover": {
      backgroundColor: "lightgrey !important",
      boxShadow: "none",

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
    marginLeft: "58% !important",
    padding: "0px !important",
    color: "#cc5647 !important",
    paddingRight: "3px !important",
    backgroundColor: "white !important",
    "&:hover": {
      color: "white !important",
      backgroundColor: "#cc5647 !important",
    },
  },
  button1: {
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
  modal: {
    width: "45%",
    position: "none",
    margin: "15% auto",

  },
  divContainer: {
    margin: "80px auto",
    border: "1px solid black",
    width: "60%",
    gap: "10px",
  },
  subContainer: {
    borderBottom: "1px solid black",
    minHeight: "50px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#cc5647",
  },
  menu: {
    color: "whitesmoke", paddingLeft: "10px",
  },
  headerName: {
    border: "none",
    width: "40px",
    marginLeft: "10px",
    color: "whitesmoke",
  },
  logoAvatar: {
    backgroundColor: "#cc5647 !important", border: "1px solid black",
  },
  sideBarContainer: {
    width: "100%",
    display: "flex",
    minHeight: "60vh",
    gap: "10px",
    overflow: "hidden",

  },
  sideBarSubContainer: {
    width: "30%",
    paddingLeft: "3px",
    paddingRight: "3px",
    boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    overflow: "scroll",
  },
  sliderForm: {
    marginTop: "5px", marginBottom: "10px", border: "none", padding: "0px",
  },
  projectDivContainer: {
    width: "70%",
    overflow: "scroll",
    height: "60vh",
  },
  projectContainer: {
    borderBottom: "1px solid black",
    minHeight: "80px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5%",
    width: "95%",
    position: "static !important",

  },
  projectSubContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
    marginTop: "10px",
    overflow: "scroll",
    width: "90%",

  },
  projectListContainer: {
    width: "60%",
    marginBottom: "10px",
  },
  nonProjectContainer: {
    width: "90%",
    marginLeft: "30px",
  },
  sideBarProjectContainer: {
    width: "100%",
    height: "190px",
    overflow: "scroll",
    // boxShadow: "0 6px 20px 0 rgb(0 0 0 / 19%)",
  },
});

function Home(props) {
  const classes = useStyle();
  const navigate = useNavigate();
  const task = useSelector((state) => state.todos.todos);
  const doneCount = useSelector((state) => state.done.done);
  const projectTittles = useSelector((state) => state.project.names);
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [prev1, setPrev1] = React.useState({
    isopen: true,
    isToday: false,
    isUpCome: false,
    selectors: false,
    isDelete: false,
    calender: false,
    ProjectButton: false,
    isProjectPage: false,
  });
  const [values, setValues] = React.useState({
    value: "",
    projectAdd: "",
    isPriority: "",
    isTodayDate: "",
    name: "",
    passName: "",
    priority: "",
  });
  const dispatch = useDispatch();
  const handleText = (e) => {
    setValues({
      value: "",
      projectAdd: "",
      isPriority: "",
      isTodayDate: "",
      name: e.target.value,
      passName: "",
      priority: "",
    });
  };
  const addHandler = () => {
    if (values.name !== "") {
      dispatch(projectActions.project({
        name: values.name,
      }));
      setValues({
        value: "",
        projectAdd: "",
        isPriority: "",
        isTodayDate: "",
        passName: "",
        priority: "",
        name: "",
      });
      setPrev1({
        isopen: false,
        isToday: false,
        isUpCome: false,
        selectors: false,
        isDelete: false,
        calender: false,
        ProjectButton: true,
        isProjectPage: false,
      });
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
    setPrev1({
      isopen: false,
      isToday: true,
      isUpCome: false,
      selectors: false,
      isDelete: false,
      calender: false,
      ProjectButton: false,
      isProjectPage: false,
    });
    setValues({
      ...values,
      priority: "",
      value: "",
    });
  };
  const inboxHandler = () => {
    setPrev1({
      isopen: true,
      isToday: false,
      isUpCome: false,
      selectors: false,
      isDelete: false,
      calender: false,
      ProjectButton: false,
      isProjectPage: false,
    });
    setValues({
      ...values,
      priority: "",
      value: "",
    });
  };
  const handleCelander = (e) => {
    setValues({
      value: e,
      projectAdd: "",
      isPriority: "",
      isTodayDate: "",
      passName: "",
      priority: "",
      name: "",
    });
    if (e !== "") {
      const newList = task.filter(
        (t) => t.date.toLocaleDateString() === new Date(e).toLocaleDateString(),
      );
      setPrev1({
        isopen: false,
        isToday: false,
        isUpCome: true,
        selectors: false,
        isDelete: false,
        calender: true,
        ProjectButton: false,
        isProjectPage: false,
      });
      setValues({
        value: e,
        projectAdd: "",
        isPriority: "",
        isTodayDate: newList,
        passName: "",
        priority: "",
        name: "",
      });
    }
  };
  const handleChange = (e) => {
    setValues({
      value: "",
      projectAdd: "",
      isPriority: "",
      isTodayDate: "",
      passName: "",
      priority: e.target.value,
      name: "",
    });
    if (e.target.value !== "") {
      const newList = task.filter((t) => t.priority === e.target.value);
      setPrev1({
        isopen: false,
        isToday: false,
        isUpCome: false,
        selectors: true,
        isDelete: false,
        calender: false,
        ProjectButton: false,
        isProjectPage: false,
      });
      setValues({
        value: "",
        projectAdd: "",
        isPriority: newList,
        isTodayDate: "",
        passName: "",
        priority: e.target.value,
        name: "",
      });
    }
  };
  const filterHandler = () => {
    setPrev1({
      isopen: false,
      isToday: false,
      isUpCome: false,
      selectors: false,
      isDelete: false,
      calender: true,
      ProjectButton: false,
      isProjectPage: false,
    });
  };
  const projectHandler = () => {
    setOpens(true);
  };
  const projectTittleHandler = () => {
    setPrev1({
      isopen: true,
      isToday: false,
      isUpCome: false,
      selectors: false,
      isDelete: false,
      calender: false,
      ProjectButton: true,
      isProjectPage: false,
    });
  };
  const projectPage = (e) => {
    setValues({
      ...values,
      projectAdd: e,
      passName: e.name,
    });
    setPrev1({
      isopen: false,
      isToday: false,
      isUpCome: false,
      selectors: false,
      isDelete: false,
      calender: false,
      ProjectButton: true,
      isProjectPage: true,
    });
  };
  const setHandler = () => {
    setPrev1({
      isopen: false,
      isToday: false,
      isUpCome: false,
      selectors: false,
      isDelete: true,
      calender: false,
      ProjectButton: false,
      isProjectPage: false,
    });
    setValues({
      ...values,
      priority: "",
      value: "",
    });
  };
  const handlerBack = () => {
    navigate("/");
  };
  return (
    <>
      <Modal
        className={classes.modal}
        open={open}
      >
        <Box>
          <AddTask headTittle={values.passName} handClose={handleClose} />
        </Box>

      </Modal>
      <Dialog
        className={classes.dialog}
        open={opens}
        onClose={handleCloses}
      >
        <DialogTitle id="alert-dialog-title" sx={{ paddingLeft: "50px", fontSize: "xx-large", marginTop: "10px" }}>Add Tittle</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Tittle" value={values.name} onChange={handleText} />
        </DialogContent>
        <DialogActions>
          <Button onClick={addHandler} variant="contained" color="success" sx={{ margin: "10px", float: "right" }}>Add</Button>
        </DialogActions>
      </Dialog>
      <div className={classes.divContainer}>
        <div className={classes.subContainer}>
          <MenuIcon className={classes.menu} />
          <HomeIcon className={classes.menu} />
          <Button
            onClick={handleClickOpen}
            variant="outlined"
            className={classes.button3}
          >
            <AddIcon />
            Add Task
          </Button>
          <h4 className={classes.headerName}>{props.cor.givenName}</h4>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="white"
          >
            <Avatar className={classes.logoAvatar}>{props.cor.givenName.charAt(0)}</Avatar>
          </IconButton>
          <Button
            variant="outlined"
            className={classes.button1}
            onClick={handlerBack}
          >
            sign Out
          </Button>
        </div>
        <div className={classes.sideBarContainer}>
          <div className={classes.sideBarSubContainer}>
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
            {prev1.calender ? (
              <LocalizationProvider className={classes.button2} dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Filter By Date"
                  value={values.value}
                  onChange={(newValue) => handleCelander(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth sx={{ marginTop: "10px", color: "GrayText" }} />}
                />
              </LocalizationProvider>
            ) : null}
            <FormControl
              fullWidth
              className={classes.sliderForm}
            >
              <InputLabel> Select priority </InputLabel>
              <Select
                value={values.priority}
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
            {prev1.ProjectButton
              ? (
                <div className={classes.sideBarProjectContainer}>
                  {projectTittles.map(
                    (item) => (
                      <Button
                        key={Math.random()}
                        className={classes.p}
                        onClick={() => projectPage(item)}
                      >
                        {item.name}
                      </Button>
                    ),
                  )}
                </div>
              )
              : null}
          </div>
          <div className={classes.projectDivContainer}>
            {prev1.isProjectPage ? (
              <>
                <div className={classes.projectContainer}>
                  <h2>{values.projectAdd.name}</h2>
                </div>
                <div className={classes.projectSubContainer}>
                  <ProjectListView projectList={values.projectAdd} />
                  <div className={classes.projectListContainer}>
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
              <div className={classes.nonProjectContainer}>
                {prev1.isopen ? (
                  <ListTask />
                ) : null}
                {prev1.isToday ? (<TodayDate />) : null}
                {prev1.isUpCome ? (<UpcomingTask upCome={values.isTodayDate} />) : null}
                {prev1.selectors ? (<PrioritySelector priorityChange={values.isPriority} />) : null}
                {prev1.isDelete ? (<Done />) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
