import { Box } from "@mui/material";
import spinnerSvg from "../assist/Dual Ball@1x-1.0s-200px-200px.gif";


const Spinner = () => {
    return (
        <Box sx={{justifyContent:"center", textAlign: "center",}} >
        <img src={spinnerSvg} alt="loading" />  
        </Box>
    )

};
export default Spinner;