import { useRecoilState } from "recoil";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import Slot from "../components/Slot";
import { bonus } from "../randomopt_tw";

import { randomAtom, uuidAtom } from "../atoms";

const Random = () => {
  const [slots, setSlots] = useRecoilState(randomAtom);
  const [uuid, setUUid] = useRecoilState(uuidAtom);

  const handleChange = (event) => {
    setSlots({ ...slots, [event.target.name]: event.target.value });
  };

  const handleOptions = (event, newValue, name) => {
    setSlots({ ...slots, [name]: newValue });
  };

  const handleMinus = () => {
    if (parseInt(slots.Options) - 1 < 1) {
      setSlots({ ...slots, Options: parseInt(slots.Options)})
    } else {
      setSlots({ ...slots, Options: parseInt(slots.Options) - 1})
    }
  }

  return (
    <Grid sx={{ marginTop: 5 }} key={uuid} container spacing={1}>
      <Grid item sm={6}>
        <FormControl
          sx={{
            width: 200,
          }}
        >
          <InputLabel id="demo-simple-select-label">Option 數量</InputLabel>
          <Select
            label="Option 數量"
            name="Options"
            value={slots.Options}
            onChange={handleChange}
          >
            {[...Array(50)].map((_, index) => (
              <MenuItem key={index} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item sm={3}>
        <IconButton onClick={(event) => setSlots({ ...slots, Options: parseInt(slots.Options) + 1 })} aria-label="add" size="large">
          <AddCircleIcon fontSize="inherit" />
        </IconButton>
      </Grid>
      <Grid item sm={3}>
        <IconButton onClick={handleMinus} aria-label="minus" size="large">
          <RemoveCircleIcon fontSize="inherit" />
        </IconButton>
      </Grid>

      {[...Array(parseInt(slots.Options, 10))].map((_, index) => (
        <Slot
          key={index}
          bonus={bonus}
          name={`slot` + `${index}`}
          index={index}
          slots={slots}
          handleOptions={handleOptions}
          handleChange={handleChange}
        />
      ))}
    </Grid>
  );
};

export default Random;
