import { useRecoilState } from "recoil";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { elementAtom } from "../atoms";

const Element = () => {
  const [element, setElement] = useRecoilState(elementAtom);

  const handleChange = (event) => {
    setElement(event.target.value);
  };

  return (
    <Box sx={{ width: 210 }}>
      <FormControl fullWidth>
        <InputLabel>Element</InputLabel>
        <Select value={element} label="Element" onChange={handleChange}>
          <MenuItem value="Neutral">Neutral</MenuItem>
          <MenuItem value="Water">Water</MenuItem>
          <MenuItem value="Earth">Earth</MenuItem>
          <MenuItem value="Fire">Fire</MenuItem>
          <MenuItem value="Wind">Wind</MenuItem>
          <MenuItem value="Poison">Poison</MenuItem>
          <MenuItem value="Holy">Holy</MenuItem>
          <MenuItem value="Dark">Dark</MenuItem>
          <MenuItem value="Ghost">Ghost</MenuItem>
          <MenuItem value="Undead">Undead</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Element;
