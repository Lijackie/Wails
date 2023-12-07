import { skilldb } from "./skilldb";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRecoilState } from "recoil";
import { skillIDAtom } from "./atoms";

const SkillID = () => {
  const [skillId, setSkillId] = useRecoilState(skillIDAtom);

  return (
    <Autocomplete
      options={skilldb}
      autoHighlight
      getOptionLabel={(option) => option.Id}
      onInputChange={(event, newInputValue) => {
        setSkillId(newInputValue);
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.Id} ({option.Name})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="技能ID (SkillID)"
          required
          name="skillID"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default SkillID;
