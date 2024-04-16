
import { Box, Divider, } from "@mui/material";
import {SidebarHeader, SidebarBody }from "./index";
import { useContext } from "react";
import MainContext from '../../context';



const DrawerContainer = () => {
  const { pageNumber, handlePagenumber, setDraweropen} = useContext(MainContext);

    return(
        <Box sx={{
            justifyContent: "center",
            textAlign: "center",        
            mt: 2, 
           }}>
             <SidebarHeader />
             <Divider variant="middle" 
             sx={{mt: 2, color: "wheat"}}
             />
             <SidebarBody pageNumber={pageNumber} handlePagenumber={handlePagenumber} setDraweropen={setDraweropen}/>
             <Divider variant="middle" 
             sx={{mt: 5, color: "wheat"}}
             />
           </Box>
    );
};
export default DrawerContainer;