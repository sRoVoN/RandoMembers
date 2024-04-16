
import { ThemeProvider } from '@mui/material/styles';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


const MainLayout = ({children, theme}) => {


    return (
        <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>
              RandoMember
            </title>
          </Helmet>
          <Grid container sx={{position:"fixed", top:60, right: 0, width: "100%", height: "100%"}}>
          {children}            
          </Grid>
        </HelmetProvider>      
      </ThemeProvider>     
    );
};

export default MainLayout;