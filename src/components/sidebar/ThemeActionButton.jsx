import { useTheme } from '@emotion/react';
import {Box, Fab} from '@mui/material';
import { LightModeRounded, NightsStayRounded } from '@mui/icons-material';



const ThemeActionButton = ({handleThemeChange}) => {
    const theme = useTheme();    

    return(
        <Box 
        sx={{ 
            position:"absolute",
            right: 20,         
        }}>
            <Fab
            aria-label="ThemeChanger"
            variant="extended"
            size="small"
            color="info"
            onClick={handleThemeChange}
            sx={{
                mr: 2, color:"Common"
            }}
            >
                {theme.palette.mode  === "dark" ? <LightModeRounded color='warning' /> : <NightsStayRounded color='warning'  /> }
            </Fab>

        </Box>
    )
};
export default ThemeActionButton;