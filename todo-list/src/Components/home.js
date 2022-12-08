
import { useSelector } from "react-redux";
import Slider from "./side";
import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { counterAction } from "../Store/reducer";
import AddTask from "./AddTask";

const Home = () => {
    const task = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch();
    const popUp = useSelector((state) => state.counter.showPopUp)
    const addListHandler = () => {
        console.log("hai");
        dispatch(counterAction.clicked())

    };

    return (
        <>
            {popUp ? (<AddTask/>) : (
                    <div style={{
                        margin:'25px auto',
                        display: 'block',
                        border:'2px solid green',
                        width: '80%',
                        // height: '80%'
                    }}
                    >
                        <div style={{
                                alignItems:'center',
                                width: '100%',
                                backgroundColor: 'black',
                                height: '10vh',
                                display: 'flex',
                                
                            }}
                        >
                            <div style={{
                                marginLeft:'80%',
                            }}>
                                <Button onClick={addListHandler} variant="contained">
                                    Add Task
                                </Button>
                            </div>
                        </div>
                        <div style={{
                            width: '30%',
                            height:'80vh',
                            border: '1px solid black',
                        }}
                        >
                            <Slider />
                        </div>

                        <div>
                            {task.map((todo) => (
                                <div>
                                    <span>{todo.tittle}</span>
                                    <span>{todo.description}</span>
                                    <span>{todo.date}</span>
                                </div>
                            ))}
                            
                        </div>   
                    </div>
                )
            }
            
        </>
    );
}
export default Home;