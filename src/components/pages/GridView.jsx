import * as React from "react";
import Spinner from "../../templates/Spinner";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AppPagination from "../../templates/AppPagination";
import axios from "axios";
import { Grids } from "../../templates/Grids";

const pageSize = 12;
const GridView = ({
  helmetTitle,
  isLoading,
  members,
  setMembers,
  pagination,
  setPagination,
  setIsLoading,
}) => {
  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
    fetchData(page);
  };
  const fetchData = async (page) => {
    try {
      setIsLoading(true);

      const { data: resData } = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=12&seed=abc`
      );
      const result = resData.results;

      setIsLoading(false);
      setMembers(result);
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(0);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, overflowY: "scroll", p: 5 }}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {members.map((member, index) => (
            <Grids member={member} key={index} />
          ))}
        </Grid>
      )}
      <AppPagination
        pagination={pagination}
        handlePageChange={handlePageChange}
        count={10}
        pageSize={pageSize}
      />
    </Box>
  );
};
export default GridView;
