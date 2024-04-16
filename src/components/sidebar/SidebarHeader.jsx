import { Typography, Avatar,} from "@mui/material";
import { RandomReveal } from "react-random-reveal";

const SidebarHeader = () => {

    return(
        <>        
                <Avatar src="/broken-image.jpg" 
                sx={{bgcolor:"warning.light", width:100, height:100, margin: "0 auto",
                display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                }
            }}
                />
                <Typography variant="h6"
                  color={"warning.main"}
                  sx={{mt: 2,
                    display: {
                        xs: "none",
                        sm: "block",
                        md: "block",
                        lg: "block",
                        xl: "block",
                    }
                }}
                  >
                 <RandomReveal isPlaying duration={2} characters=" Random Member " />
                </Typography>
        
        </>

    );
};
export default SidebarHeader;