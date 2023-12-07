import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useRecoilState } from "recoil";
import { cancelableAtom } from "./atoms";

const Cancelable = () => {
  const [cancel, setCancel] = useRecoilState(cancelableAtom);

  return (
    <FormControl style={{ margin: "8px", width: "25ch" }}>
      <FormLabel id="demo-radio-buttons-group-label">
        可否取消 (Cancelable)
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="yes"
        name="radio-buttons-group"
        row
        value={cancel}
        onChange={(event) => setCancel(event.target.value)}
      >
        <FormControlLabel value="yes" control={<Radio />} label="yes" />
        <FormControlLabel value="no" control={<Radio />} label="no" />
      </RadioGroup>
    </FormControl>
  );
};

export default Cancelable;
