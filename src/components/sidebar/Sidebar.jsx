import DrawerActionButton from "./DrawerActionButton";
import {DrawerContainer} from "./index";
import SidebarDrawer from "./SidebarDrawer";
import { useContext } from "react";
import MainContext from '../../context';




const Sidebar = () => {
    const { pageNumber, handlePagenumber, setDraweropen} = useContext(MainContext);

    return(
         <div>
            <DrawerActionButton setDraweropen={setDraweropen} />
            <SidebarDrawer pageNumber={pageNumber} handlePagenumber={handlePagenumber} />
            <DrawerContainer pageNumber={pageNumber} handlePagenumber={handlePagenumber} setDraweropen={setDraweropen} />
        </div>             
    );
};
export default Sidebar;