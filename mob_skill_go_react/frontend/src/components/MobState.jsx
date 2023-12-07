import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRecoilState } from "recoil";
import { mobStateAtom } from "./atoms";

const stateOption = [
  { label: "any", description: "except dead" },
  { label: "idle", description: "in standby" },
  { label: "walk", description: "in movement" },
  { label: "dead", description: "on killed" },
  { label: "loot", description: "" },
  { label: "attack", description: "" },
  {
    label: "angry",
    description: "like attack, except player has not attacked mob yet",
  },
  { label: "chase", description: "following target, after being attacked" },
  { label: "follow", description: "following target, without being attacked" },
  { label: "anytarget", description: "attack+angry+chase+follow" },
];

const MobState = () => {
  const [mobSate, setMobState] = useRecoilState(mobStateAtom);

  return (
    <Autocomplete
      options={stateOption}
      autoHighlight
      getOptionLabel={(option) => option.label}
      onInputChange={(event, newInputValue) => {
        setMobState(newInputValue);
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.label}{" "}
          {option.description !== "" ? " (" + option.description + ")" : ""}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="狀態 (State)"
          required
          name="State"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default MobState;
