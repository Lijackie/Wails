import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRecoilState } from "recoil";
import { conditionTypeAtom, conditionValueAtom } from "./atoms";

const conditionTypeOption = [
  { label: "always", description: "Unconditional (no condition value)" },
  {
    label: "onspawn",
    description: "When mob spawns/respawns (no condition value)",
  },
  {
    label: "myhpltmaxrate",
    description: "When mob's HP drops to the specified %",
  },
  {
    label: "myhpinrate",
    description:
      "When mob's HP is in a certain % range (condition value = lower bound, val1 = upper bound)",
  },
  {
    label: "mystatuson",
    description: "If mob has the specified abnormality in status",
  },
  {
    label: "mystatusoff",
    description: "If mob has ended the specified abnormality in status",
  },
  {
    label: "friendhpltmaxrate",
    description: "When mob's friend's HP drops to the specified %",
  },
  {
    label: "friendhpinrate",
    description:
      "When mob's friend's HP is in a certain % range (condition value = lower bound, val1 = upper bound)",
  },
  {
    label: "friendstatuson",
    description: "If friend has the specified abnormality in status",
  },
  {
    label: "friendstatusoff",
    description: "If friend has ended the specified abnormality in status",
  },
  {
    label: "attackpcgt",
    description: "When attack PCs become greater than specified number",
  },
  {
    label: "attackpcge",
    description:
      "When attack PCs become greater than or equal to the specified number",
  },
  {
    label: "slavelt",
    description:
      "When number of slaves is less than the original specified number",
  },
  {
    label: "slavele",
    description:
      "When number of slaves is less than or equal to the original specified number",
  },
  {
    label: "closedattacked",
    description: "When close range melee attacked (no condition value)",
  },
  {
    label: "longrangeattacked",
    description:
      "When long range attacked, ex. bows, guns, ranged skills (no condition value)",
  },
  {
    label: "skillused",
    description: "When the specified skill is used on the mob",
  },
  { label: "afterskill", description: "After mob casts the specified skill" },
  {
    label: "casttargeted",
    description: "When a target is in cast range (no condition value)",
  },
  {
    label: "rudeattacked",
    description: "When mob is rude attacked (no condition value)",
  },
  {
    label: "mobnearbygt",
    description: "When monsters in range become greater than specified number",
  }
];

const Condition = () => {
  const [conditionType, setConditionType] = useRecoilState(conditionTypeAtom);

  return (
    <Autocomplete
      options={conditionTypeOption}
      autoHighlight
      getOptionLabel={(option) => option.label}
      onInputChange={(event, newInputValue) => {
        setConditionType(newInputValue);
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <p><span className="text-red">{option.label}{" "}</span>{option.description !== "" ? " (" + option.description + ")" : ""}</p>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="條件 (Condition Type)"
          required
          name="conditionType"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default Condition;
