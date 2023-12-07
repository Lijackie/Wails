import { useRecoilState } from "recoil";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { sizeAtom } from "../atoms";

const Size = () => {
  const [size, setSize] = useRecoilState(sizeAtom);
  
  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Box sx={{ width: 210 }}>
      <FormControl fullWidth>
        <InputLabel>Size</InputLabel>
        <Select
          value={size}
          label="Size"
          onChange={handleChange}
        >
          <MenuItem value="Small">Small</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Large">Large</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Size;
