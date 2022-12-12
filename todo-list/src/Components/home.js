
import Slider from "./side";
import React from "react";
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const Home = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <>
            {open ? (
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        > <AddTask/> </Dialog>
                    ) : (
                    <div style={{
                        margin:'25px auto',
                        display: 'block',
                        border:'2px solid green',
                        width: '80%',
                        height: '80vh',
                        display: 'flex'
                    }}
                    >
                        <div style={{
                            margin:'0px',
                            width: '30%',
                            height:'80vh',
                            borderRight: '1px solid black'
                        }}>
                            <Slider/>
                        </div>
                        <div style={{
                            display:'flex',
                            flexDirection: 'column',
                            width: '80%',
                            height:'80vh'
                            



                            
                        }}>
                            <div style={{
                                border:'1px solid black',
                                height:'60px',
                                display:'flex', alignItems:'center',paddingLeft: '85%'


                            }}>
                                <Button onClick={handleClickOpen} variant="contained" sx={{}}>
                                    Add Task
                                </Button>
                            </div>
                            <div>
                                <ListTask/>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </>
    );
}
export default Home;
