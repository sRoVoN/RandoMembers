import { HomeRounded, ListAltRounded, GridOnRounded, 
    PersonAddRounded, ManageAccountsRounded,
 } from "@mui/icons-material";


 
const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}


export const tabsData = () => {


    const tabs =  [
        {
            label: "HOME",
            icon : <HomeRounded  fontSize="large" />,
            ...tabProps(0)
        },
        {
            label: "GRIDVIEW Of MEMBERS",
            icon : <GridOnRounded   />,
            ...tabProps(1)
        },
        {
            label: "CARDVIEW Of MEMBERS",
            icon : <ListAltRounded  />,
            ...tabProps(2)
        },
        {
            label: "ADD MEMBER",
            icon : <PersonAddRounded   fontSize="large" />,
            ...tabProps(3)
        },
        {
            label: "SEARCH  MEMBER",
            icon : <ManageAccountsRounded fontSize="large" />,
            ...tabProps(4)
        },
    ]

    return tabs
    };


