import { Box, } from "@mui/material";


const TabPanel = (props) => {
    const {children, pageNumber , index, ...others} = props;
    

    return(
        <div
        role="tabpanel"
        hidden={pageNumber  !== index}
        id={`sidebar-tab-${index}`}
        aria-labelledby={`tabpanel-${index}`}
        {...others}
        >
            {
                pageNumber  === index && (
                    <Box
                    sx={{height: "100vh", overflow: "scroll",}}
                    >
                        {children}

                    </Box>

                )}
        </div>

    );
};
export default TabPanel;