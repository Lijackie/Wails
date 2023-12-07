import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRecoilState } from "recoil";
import { targetAtom } from "./atoms";

const targetOption = [
  { label: "target", description: "current target" },
  { label: "self", description: "" },
  { label: "friend", description: "" },
  { label: "master", description: "" },
  { label: "randomtarget", description: "any enemy within skill's range" },
  { label: "around1", description: "3x3 area around self" },
  { label: "around2", description: "5x5 area around self" },
  { label: "around3", description: "7x7 area around self" },
  { label: "around4", description: "9x9 area around self" },
  { label: "around5", description: "3x3 area around target" },
  { label: "around6", description: "5x5 area around target" },
  { label: "around7", description: "7x7 area around target" },
  { label: "around8", description: "9x9 area around target" },
  { label: "around", description: "around = around4" },
];

const Target = () => {
  const [target, setTarget] = useRecoilState(targetAtom);

  return (
    <Autocomplete
      options={targetOption}
      autoHighlight
      getOptionLabel={(option) => option.label}
      onInputChange={(event, newInputValue) => {
        setTarget(newInputValue);
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
          label="目標 (Target)"
          required
          name="target"
          onChange={(event) => setTarget(event.target.value)}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default Target;
