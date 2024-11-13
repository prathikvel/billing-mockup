import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface DropdownProps {
  label: string;
  value?: string;
  items: string[];
  onChange?: (e: SelectChangeEvent) => void;
}

const Dropdown = ({ label, value = "", items, onChange }: DropdownProps) => {
  const labelTitle = label
    .replace(/-/g, " ")
    .replace(/\w\S*/g, (str) => `${str[0].toUpperCase()}${str.slice(1)}`);

  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}-label`}>{labelTitle}</InputLabel>
      <Select
        id={label}
        value={value}
        label={labelTitle}
        labelId={`${label}-label`}
        onChange={onChange}
      >
        {items.map((v, i) => <MenuItem key={i} value={v}>{v}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
