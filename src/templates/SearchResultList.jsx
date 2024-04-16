import {  Box,  } from "@mui/material";

const SearchResultList = ({ sort}) => {
  
  return (
    <Box component="div" sx={{ p: 2, display:"flex", flexDirection: "column" }}>
      {
      sort ? sort.map((result, id) => (
        <Box component="div"
          sx={{ mt: 4, mb: 2 }}
          key={id}         
        >
            {result.name.last}
        </Box>
      )) : null
    }
    </Box>
  );
};
export default SearchResultList;
