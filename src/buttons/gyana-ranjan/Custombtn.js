import { Button } from "@mui/material";
import { GitHub } from '@mui/icons-material'

const Custombtn = (props) => {
    return (
        <Button endIcon={<GitHub/>} href={props.link}  variant='contained' sx={{mr: 2, mb: 1}} {...props}>{props.text}</Button>
    );
}

export default Custombtn;