import { useRecoilState } from "recoil";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { aiAtom } from "../atoms";

const Size = () => {
  const [ai, setAi] = useRecoilState(aiAtom);

  const handleChange = (event) => {
    setAi(event.target.value);
  };

  return (
    <Box sx={{ width: 210 }}>
      <FormControl fullWidth>
        <InputLabel>Ai</InputLabel>
        <Select value={ai} label="Ai" onChange={handleChange}>
          {[
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
          ].map((num, index) => (
            <MenuItem key={index} value={num}>
              {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Size;
