
import React from "react";
import { useSelector } from "react-redux";
import { Button } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import Edit from "./Edit";
import Dialog from '@mui/material/Dialog';




const ListTask = () => {
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = React.useState();

    const handleClickOpen = (id) => {
        setOpen(true);
        setEdit(id);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const task = useSelector((state) => state.todos.todos)
    console.log(task.length);
    

    return (
        <> 
           {open ? (
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        > <Edit editList={edit}/> </Dialog>
           ) : (
            task.map((todo) => (
                <div style={{
                    // margin: '25px auto',
                    marginLeft:'15px',
                    marginTop:'15px',
                    border: '2px solid green',
                    height: '10vh',
                    width: '60%',
                }}>
                    
                    <div style={{display:'inline-block', }}>
                        <div style={{ display:'flex', justifyContent:'space-between'}}>
                         <input type='Checkbox'/>
                         <span>Tittle:{todo.tittle}</span>
                        </div>
                        <div style={{marginTop:'13px', paddingLeft:'20px'}}>
                         <input value={todo.date}/>
                        </div>
                    </div>
                    <Button  variant='contained' color="success" sx={{marginTop:'20px', marginRight:'20px', float:'right'}} onClick={() =>handleClickOpen(todo.id)}><EditIcon/></Button>
                </div>
            ))
           ) }
            
        </>

        
    );
}
export default ListTask;