
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../Store/todo';
import { counterAction } from "../Store/reducer";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';

// const useStyle = makeStyles({
//     div:{
//         margin: "25px auto"
//     },
// })



const AddTask = () => {
    const [tittle, setTittle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();
    const handlerHome = ()=> {
        dispatch(counterAction.back())
    }
    const addHandler =()=>{
        console.log('hai')
        if(tittle !== "" && description !== "" && date !=="") {
            dispatch(todoActions.addUser({
                tittle:tittle,
                description:description,
                date:date
            }))
            setDescription('');
            setTittle('');
            setDate('');
        } else {
            alert("please enter the field")
        }
        
        
    }

    // const classes = useStyle();
    return (
        <div style={{margin : '25% auto',
            width: '50%',}}>
            <TextField fullWidth label="Tittle" value={tittle} onChange={(e) => setTittle(e.target.value)} />
            <textarea  label="" value={description} onChange={(e) => setDescription(e.target.value)}
                style={{
                    width: '100%',
                    height: '150px',
                    padding: '12px 20px',
                    boxSizing: 'border-box',
                    border: '2px solid #ccc',
                    borderRadius: '4px',
                    backgroundColor: '#f8f8f8',
                    fontSize: '16px',
                    resize: 'none'
                }}  
            />
            {/* <input type="date" value={date} onChange={(e) => setDate(e.target.value)} ></input> */}
            <LocalizationProvider dateAdapter={AdapterMoment} >
                <DatePicker
                    label="Basic example"
                    value={date}
                    onChange={(e) => {
                    setDate(e.target.value);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <Button onClick={addHandler} variant='contained' color="success">Add</Button>
            <Button onClick={handlerHome} variant='contained' color="primary">Back</Button>
        </div>
    );

};
export default AddTask;