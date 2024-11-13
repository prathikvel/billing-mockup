import { useState } from "react";

import Box from "@mui/material/Box";
import { SelectChangeEvent } from "@mui/material/Select";

import Criteria from "./Criteria";
import Dropdown from "./Dropdown";
import { SEARCH_TYPES } from "../mockData";

const SearchForm = () => {
  const [type, setType] = useState("");
  const handleChange = (e: SelectChangeEvent) => setType(e.target.value);

  return (
    <Box sx={{ minWidth: 120 }}>
      <Dropdown
        label="type"
        value={type}
        items={SEARCH_TYPES}
        onChange={handleChange}
      />
      <Criteria type={type} />
    </Box>
  );
};

export default SearchForm;
