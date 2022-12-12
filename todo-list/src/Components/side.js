import { Button } from "@mui/material";

const Slider = () => {
    return (
        <div>
            <Button variant='contained' color="success" sx={{ marginTop: '70px', width:'100%', backgroundColor:'darkslategray' }}>Inbox</Button>
            <Button variant='contained' color="success"  sx={{ margin: '10px auto', width:'100%', backgroundColor:'darkslategray' }}>Filter By Date</Button>

        </div>
    );
}
export default Slider;