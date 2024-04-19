import "./App.css";
import {
  CardView,
  GridView,
  Header,
  Home,
  Mainpage,
  SearchMember,
} from "./components/index";
import MainContext from "./context";
import { lightTheme, darkTheme } from "./templates/theme";
import { useEffect, useState } from "react";
import MainLayout from "./templates/layouts/MainLayout";
import TabPanel from "./components/sidebar/TabPanel";
import { Typography, useMediaQuery } from "@mui/material";
import { SidebarContainer, Sidebar } from "./components/sidebar/index";
import { useTheme } from "@mui/material/styles";

const pageSize = 12;
const App = () => {
  const [mode, setMode] = useState();
  const [pageNumber, setPagenumber] = useState(0);
  const theme = mode === "dark" ? darkTheme : lightTheme;
  const [drawerOpen, setDraweropen] = useState(false);
  const query = useTheme();
  const isSmUp = useMediaQuery(query.breakpoints.up("sm"));
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [members, setMembers] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isSmUp) {
      setDraweropen(false);
    }
  }, [isSmUp]);

  const handlePagenumber = (event, newPage) => {
    setPagenumber(newPage);
  };
  const handleChangeTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setMode("light");
  }, []);

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePagenumber,
        drawerOpen,
        setDraweropen,
        isLoading,
        setIsLoading,
        members,
        setMembers,
        pagination,
        setPagination,
        loading,
        setLoading
      }}
    >
      <MainLayout theme={theme} mode={mode}>
        <Header mode={mode} handleChangeTheme={handleChangeTheme} />
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Mainpage isLoading={isLoading} setIsLoading={setIsLoading}>
          <TabPanel pageNumber={pageNumber} index={0}>
            <Home
              avatars={avatars}
              setAvatars={setAvatars}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={1}>
            <GridView
              helmetTitle="GridView"
              isLoading={isLoading}
              loading={loading}
              setLoading={setLoading}
              setIsLoading={setIsLoading}
              members={members}
              setMembers={setMembers}
              pagination={pagination}
              setPagination={setPagination}
            />
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={2}>
            <CardView
              helmetTitle="CardView"
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              loading={loading}
              setLoading={setLoading}
              members={members}
              setMembers={setMembers}
              pagination={pagination}
              setPagination={setPagination}
            />
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={3}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Add Member
            </Typography>
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={4}>
            <SearchMember results={results} setResults={setResults} />
          </TabPanel>
        </Mainpage>
      </MainLayout>
    </MainContext.Provider>
  );
};

export default App;
