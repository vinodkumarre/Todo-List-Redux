import React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../Store/todo';
import { Dayjs } from 'dayjs';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
let counter =0;

const AddTask = () => {
    const [tittle, setTittle] = useState('');
    const [description, setDescription] = useState('');
    const [tittleText, setTittleText] = useState('');
    const [dateText, setDateText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const addHandler =()=>{
        counter+=1;
        const d = new Date(value);
        if(tittle !== "") {
            dispatch(todoActions.addUser({
                tittle:tittle,
                description:description,
                id:counter,
                date:d.toLocaleDateString(),
            }))
            setDescription('');
            setTittle('');
        } else {
            setDateText('please enter Date');
            setTittleText('please enter Tittle');
            setDescriptionText('please enter Description');
        } 
    }
    return (
        <>
            <div style={{
                margin:'15px auto',
                width:'80%',
                paddingLeft:'40%'
            }}>
                <h3>Add Task</h3>

            </div>
            <div style={{height:'80%', margin:'auto',
            width: '80%', display:'block'}}>
            <TextField fullWidth label="Tittle" value={tittle}  onChange={(e) => setTittle(e.target.value)} helperText={tittleText} sx={{marginTop:'10px',}} />
            <TextareaAutosize 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                fullWidth
                style={{ resize: 'none',height: '60px', marginTop:'10px', width: '-webkit-fill-available', borderRadius: '4px', }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="pick Date"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth sx={{marginTop:'10px', color:'GrayText'}} />}
                />
            </LocalizationProvider>
            <Button onClick={addHandler} variant='contained' color="success" sx={{margin:'10px', float:'right'}}>Add</Button>
        </div>
        </>
    );

};
export default AddTask;
