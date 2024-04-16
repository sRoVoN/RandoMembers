import { AppBar, Toolbar, Container , Typography, useScrollTrigger } from "@mui/material";
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import { cloneElement } from "react";
import ThemeActionButton from "./sidebar/ThemeActionButton";



const Header =({ mode, handleChangeTheme}) => {

  function ElevationScroll (props) {
    const {children} = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
     return cloneElement(children, {
      elevation: trigger ? 4 : 0
     });
  };

    return(
        <>
        <ElevationScroll mode={mode}>
        <AppBar color="secondary"sx={{height: 55}}>
            <Container maxWidth="xl">
               <Toolbar>               
                <RecentActorsRoundedIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                 variant="h6"
                 noWrap
                 component="a"
                 href="#app-bar-with-responsive-menu"
                 sx={{
                 mr: 2,
                 display: { xs: 'none', md: 'flex' },
                  
                 letterSpacing: '.3rem',
                 color: "inherit",
                 textDecoration: 'none',
            }}
          >
            RandoMember          
          </Typography>         
          <ThemeActionButton  handleThemeChange={handleChangeTheme}/>           
               </Toolbar>
            </Container>
        </AppBar> 
        </ElevationScroll>    
        </>
    );

};
export default Header;