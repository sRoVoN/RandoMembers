import { Tabs, Tab,} from "@mui/material";
import MainContext from '../../context';
import { tabsData } from "./tabsData";
import { useContext } from "react";
import { useTheme } from "@emotion/react";



const SidebarBody = () => {
    const {pageNumber, handlePagenumber, setDraweropen} = useContext(MainContext);
    const theme = useTheme();
    const data = tabsData();

    return(
        <Tabs orientation="vertical"
        variant="scrollable"
        textColor={theme.palette.mode === "light" ? "secondary" : "primary.text"}
        indicatorColor={theme.palette.mode === "light" ? "secondary" : "primary" }
        allowScrollButtonsMobile
        value={pageNumber}
        onChange={handlePagenumber}
        >
            {
                data.map( (tab, index) => (
                    <Tab 
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition="start"
                    {...tab}
                    onClick={() => setDraweropen(false)}
                    />    
                ))
            }
   
        </Tabs>
    );
};
export default SidebarBody;