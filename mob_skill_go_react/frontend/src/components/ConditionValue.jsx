import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRecoilState } from "recoil";
import { conditionTypeAtom, conditionValueAtom } from "./atoms";

const conditionValueOption = [
  { label: "0", description: "數字" },
  { label: "anybad", description: "any type of state change" },
  { label: "stone", description: "" },
  { label: "freeze", description: "" },
  { label: "stun", description: "" },
  { label: "sleep", description: "" },
  { label: "poison", description: "" },
  { label: "curse", description: "" },
  { label: "silence", description: "" },
  { label: "confusion", description: "" },
  { label: "blind", description: "" },
  { label: "hiding", description: "" },
  { label: "sight", description: "unhidden" },
];

const ConditionValue = () => {
  const [conditionType, setConditionType] = useRecoilState(conditionTypeAtom);

  const [conditionValue, setConditionValue] =
    useRecoilState(conditionValueAtom);

  return (
    <Autocomplete
      options={conditionValueOption}
      freeSolo
      autoHighlight
      getOptionLabel={(option) => option.label}
      onInputChange={(event, newInputValue) => {
        setConditionValue(newInputValue);
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.label}{" "}
          {option.description !== "" ? " (" + option.description + ")" : ""}
        </Box>
      )}
      renderInput={(params) =>
          <TextField
            {...params}
            label="條件值 (Condition value)"
            name="conditionValue"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
      }
    />
  );
};

export default ConditionValue;
