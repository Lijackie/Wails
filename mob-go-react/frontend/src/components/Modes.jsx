import { useRecoilState } from "recoil";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { modesAtom } from '../atoms';

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
  "CanMove",
  "Looter",
  "Aggressive",
  "Assist",
  "CastSensorIdle",
  "NoRandomWalk",
  "NoCast",
  "CanAttack",
  "CastSensorChase",
  "ChangeChase",
  "Angry",
  "ChangeTargetMelee",
  "ChangeTargetChase",
  "TargetWeak",
  "RandomTarget",
  "IgnoreMelee",
  "IgnoreMagic",
  "IgnoreRanged",
  "Mvp",
  "IgnoreMisc",
  "KnockBackImmune",
  "TeleportBlock",
  "FixedItemDrop",
  "Detector",
  "StatusImmune",
  "SkillImmune",
];

const Modes = () => {
    const [modes, setModes] = useRecoilState(modesAtom);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setModes(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 210 }}>
        <InputLabel id="demo-multiple-checkbox-label">Modes</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={modes}
          onChange={handleChange}
          input={<OutlinedInput label="Modes" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={modes.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Modes;
