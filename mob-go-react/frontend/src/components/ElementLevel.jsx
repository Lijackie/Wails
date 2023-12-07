import { useRecoilState } from "recoil";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { elementLevelAtom } from "../atoms";

const Element = () => {
    const [elementLevel, setElementLevel] = useRecoilState(elementLevelAtom);

  const handleChange = (event) => {
    setElementLevel(event.target.value);
  };

  return (
    <Box sx={{ width: 210 }}>
      <FormControl fullWidth>
        <InputLabel>ElementLevel</InputLabel>
        <Select value={elementLevel} label="Element" onChange={handleChange}>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Element;
