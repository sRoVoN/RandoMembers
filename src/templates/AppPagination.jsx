import { Pagination, Stack } from "@mui/material";


const AppPagination = ({ pagination, handlePageChange , count  }) => {

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      display="flex"
      my={10}
    >
      <Pagination
        count={count}
        onChange={handlePageChange}
        color="primary"
        pagination={pagination}               
      />
    </Stack>
  );
};
export default AppPagination;
