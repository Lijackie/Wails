import { useRecoilState } from "recoil";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { raceGroupsAtom } from '../atoms';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Goblin",
  "Kobold",
  "Orc",
  "Golem",
  "Guardian",
  "Ninja",
  "Gvg",
  "Battlefield",
  "Treasure",
  "Biolab",
  "Manuk",
  "Splendide",
  "Scaraba",
  "Ogh_Atk_Def",
  "Ogh_Hidden",
  "Bio5_Swordman_Thief",
  "Bio5_Acolyte_Merchant",
  "Bio5_Mage_Archer",
  "Bio5_Mvp",
  "Clocktower",
  "Thanatos",
  "Faceworm",
  "Hearthunter",
  "Rockridge",
  "Werner_Lab",
  "Temple_Demon",
  "Illusion_Vampire",
];

const RaceGroups = () => {
  const [raceGrops, setRaceGroups] = useRecoilState(raceGroupsAtom);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setRaceGroups(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 210 }}>
        <InputLabel id="demo-multiple-checkbox-label">RaceGroups</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={raceGrops}
          onChange={handleChange}
          input={<OutlinedInput label="RaceGroups" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={raceGrops.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default RaceGroups;
