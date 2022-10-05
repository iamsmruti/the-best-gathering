import { Button } from "@mui/material";
import { GitHub } from '@mui/icons-material'
//this is a custom button component
//it takes a prop named text
//it takes a prop named icon
//it takes a prop named color
//it takes a prop named link
//it takes a prop named variant
//it takes a prop named size
const Custombtn = (props) => {
    return (
        <Button endIcon={<GitHub/>} href={props.link}  variant='contained' sx={{mr: 2, mb: 1}} {...props}>{props.text}</Button>
    );
}

export default Custombtn;