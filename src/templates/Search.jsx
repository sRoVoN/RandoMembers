import { Box, OutlinedInput, FormControl } from "@mui/material";
import SearchResultList from "./SearchResultList";
import { useEffect, useState } from "react";

export const Search = ({ results, handleChange, MyFormHelperText, input }) => {
  const [sort, setSort] = useState([]);
  const sortedData = results.sort((a, b) =>
    a.name.last.localeCompare(b.name.last)
  );
  useEffect(() => {
    setSort(sortedData);
  }, [sortedData]);
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100ch" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <OutlinedInput
          color="secondary"
          placeholder="search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <MyFormHelperText />
        <SearchResultList sort={sort} />
      </FormControl>
    </Box>
  );
};
