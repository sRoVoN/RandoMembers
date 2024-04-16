import { Box } from "@mui/material";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import AppPagination from "../../templates/AppPagination";
import axios from "axios";
import { Cards } from "../../templates/Cards";
import Spinner from "../../templates/Spinner";

const pageSize = 8;

const CardView = ({
  helmetTitle,
  members,
  setMembers,
  pagination,
  setPagination,
  setIsLoading,
  isLoading,
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
        `https://randomuser.me/api/?page=${page}&results=6&seed=abc`
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
    fetchData(1);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, overflowY: "scroll", p: 5 }}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Grid
        container
        sx={{ justifyContent: "center", textAlign: "center" }}
        columnSpacing={{ sm: 10, md: 5 }}
        rowSpacing={2}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          members.map((member, index) => <Cards key={index} member={member} />)
        )}
      </Grid>
      <AppPagination
        pagination={pagination}
        handlePageChange={handlePageChange}
        count={15}
        pageSize={pageSize}
      />
    </Box>
  );
};
export default CardView;
