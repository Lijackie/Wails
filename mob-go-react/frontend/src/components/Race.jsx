import { useRecoilState } from "recoil";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { raceAtom } from "../atoms";

const Race = () => {
  const [race, setRace] = useRecoilState(raceAtom);

  const handleChange = (event) => {
    setRace(event.target.value);
  };

  return (
    <Box sx={{ width: 210 }}>
      <FormControl fullWidth>
        <InputLabel>Race</InputLabel>
        <Select value={race} label="Race" onChange={handleChange}>
          <MenuItem value="Formless">Formless</MenuItem>
          <MenuItem value="Undead">Undead</MenuItem>
          <MenuItem value="Brute">Brute</MenuItem>
          <MenuItem value="Plant">Plant</MenuItem>
          <MenuItem value="Insect">Insect</MenuItem>
          <MenuItem value="Fish">Fish</MenuItem>
          <MenuItem value="Demon">Demon</MenuItem>
          <MenuItem value="Demihuman">Demihuman</MenuItem>
          <MenuItem value="Angel">Angel</MenuItem>
          <MenuItem value="Dragon">Dragon</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Race;
