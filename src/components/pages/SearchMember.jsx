import * as React from "react";
import FormHelperText from "@mui/material/FormHelperText";
import { Typography, Box } from "@mui/material";
import { useState } from "react";
import { useFormControl } from "@mui/material/FormControl";
import axios from "axios";
import { Search } from "../../templates/Search";

const SearchMember = ({ results, setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      const { data } = await axios.get(
        "https://randomuser.me/api/?results=120&inc=name"
      );
      const users = data.results;

      const searchName = users.filter((user) => {
        return (
          value &&
          user &&
          user.name.last.toString().toLowerCase().includes(value)
        );
      });

      setResults(searchName);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
      if (focused) {
        return "...searching members by lastname";
      }

      return null;
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Search Member
      </Typography>
      <Search
        results={results}
        handleChange={handleChange}
        input={input}
        MyFormHelperText={MyFormHelperText}
      />
    </Box>
  );
};
export default SearchMember;
