import Grid from "@mui/material/Unstable_Grid2/Grid2";
import cover from '../assist/varying-stripes.svg';

const Mainpage = ({children}) => {
    return(
        <Grid  xs={12} sm={12} md={9} lg={10} xl={10} 
        sx={{backgroundImage: `url(${cover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        mt: -1
    }}
        >
          {children}

      </Grid>
    );   
}
export default Mainpage;