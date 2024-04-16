import { Box, Fab} from "@mui/material";
import {MenuRounded }from '@mui/icons-material';
import { green } from "@mui/material/colors";
import { useContext } from "react";
import MainContext from '../../context';

const DrawerActionButton = () => {
    const {setDraweropen} = useContext(MainContext);
    return(
        <Box sx={{display: {
            xs: "block",
            sm: "block",
            md: "none",             
             }}}>
                <Fab aria-label="sidebar"
                size="small"
                sx={{m: 2, backgroundColor: green[200],
                position: "absolute",                        
                }}
                onClick={() => setDraweropen(true)}
               >
                  <MenuRounded />
               </Fab>
            </Box>
    );
};
export default DrawerActionButton;