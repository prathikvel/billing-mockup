import { useState } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Criteria from "./Criteria";

const SearchForm = () => {
  const [type, setType] = useState("");
  const handleTypeChange = (e: SelectChangeEvent) => setType(e.target.value);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          id="type"
          value={type}
          label="Type"
          labelId="type-label"
          onChange={handleTypeChange}
        >
          <MenuItem value={1}>Bill Search</MenuItem>
          <MenuItem value={2}>Special Assessment Search</MenuItem>
          <MenuItem value={3}>Delinquent Bill Search</MenuItem>
          <MenuItem value={4}>Personal Property Search</MenuItem>
        </Select>
      </FormControl>

      <Criteria type={type} />
    </Box>
  );
};

export default SearchForm;
