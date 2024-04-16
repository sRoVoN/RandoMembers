import { Drawer,} from "@mui/material";
import {DrawerContainer} from "./index";
import MainContext from '../../context';
import { useContext } from "react";

const SidebarDrawer = () => {
  const { drawerOpen, setDraweropen } = useContext(MainContext);

    return(
        <Drawer
        open={drawerOpen}
        variant="temporary"
        onClose={() => setDraweropen(false)}
        sx={{
          "&.MuiDrawer-paper": {
          width: 300,
          overflowY: "scroll"
         }, 
        display: {
          xs:"block",
          sm:"block",
          md:"none",
          lg:"none",
          xl:"none"
         }
       }}
       >
          <DrawerContainer />
      </Drawer>
    );
};
export default SidebarDrawer;