import { useRecoilState } from "recoil";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { mobClassAtom } from "../atoms";

const MobClass = () => {
    const [mobClass, setMobClass] = useRecoilState(mobClassAtom);
  
  const handleChange = (event) => {
    setMobClass(event.target.value);
  };

  return (
    <Box sx={{ width: 210 }}>
      <FormControl fullWidth>
        <InputLabel>Class</InputLabel>
        <Select
          value={mobClass}
          label="Class"
          onChange={handleChange}
        >
          <MenuItem value="Normal">Normal</MenuItem>
          <MenuItem value="Boss">Boss</MenuItem>
          <MenuItem value="Guardian">Guardian</MenuItem>
          <MenuItem value="Battlefield">Battlefield</MenuItem>
          <MenuItem value="Event">Event</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MobClass;
