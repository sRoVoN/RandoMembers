import Grid from '@mui/material/Unstable_Grid2/Grid2';
import sidebarCover from '../../assist/dragon-scales.svg';


const SidebarContainer = ({children}) => {
    return(
        <Grid sx={{backgroundImage: `url(${sidebarCover})`, 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",  
        height: "100vh",
        overflowY: "scroll",
        mt: -1.5
     }}
         xs={0} sm={0} md={3} lg={2} xl={2}> 
         {children}
         </Grid>        
    );
};
export default SidebarContainer;