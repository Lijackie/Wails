import { useRecoilState } from "recoil";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { upgradeAtom, targetItmesAtom } from "../atoms";

const Upgrade = () => {
  const [upgrade, setUpgrade] = useRecoilState(upgradeAtom);
  const [targetItems, setTargetItems] = useRecoilState(targetItmesAtom);

  const handleChange = (event) => {
    setUpgrade({ ...upgrade, [event.target.name]: event.target.value });
  };

  const handleCheck = (event) => {
    setUpgrade({
      ...upgrade,
      [event.target.name]: event.target.checked,
    });
  };

  const handleTargetItemArray = (event) => {
    setTargetItems({ ...targetItems, [event.target.name]: event.target.value });
  };

  return (
    <Grid container spacing={1}>
      <Grid item sm={12}>
        <TextField
          label="Item"
          name="Item"
          value={upgrade.Item}
          required
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={12}>
        <TextField
          label="RandomOptionGroup"
          name="RandomOptionGroup"
          value={upgrade.RandomOptionGroup}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={12}>
        <TextField
          label="ResultRefine"
          name="ResultRefine"
          value={upgrade.ResultRefine}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={6}>
        <TextField
          label="ResultRefineMinimum"
          name="ResultRefineMinimum"
          value={upgrade.ResultRefineMinimum}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={6}>
        <TextField
          label="ResultRefineMaximum"
          name="ResultRefineMaximum"
          value={upgrade.ResultRefineMaximum}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={6}>
        <TextField
          label="MinimumRefine"
          name="MinimumRefine"
          value={upgrade.MinimumRefine}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={6}>
        <TextField
          label="MaximumRefine"
          name="MaximumRefine"
          value={upgrade.MaximumRefine}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={6}>
        <TextField
          label="RequiredRandomOptions"
          name="RequiredRandomOptions"
          value={upgrade.RequiredRandomOptions}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={6}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="CardsAllowed"
                checked={upgrade.CardsAllowed}
                onChange={handleCheck}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="CardsAllowed"
          />
        </FormGroup>
      </Grid>

      <Grid sx={{ marginTop: 5 }} item sm={12}>
        <FormControl
          sx={{
            width: 200,
          }}
        >
          <InputLabel id="demo-simple-select-label">TargetItem 數量</InputLabel>
          <Select
            label="TargetItem 數量"
            name="TargetItems"
            value={upgrade.TargetItems}
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>13</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={17}>17</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={19}>19</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {Array(parseInt(upgrade.TargetItems, 10))
        .fill(1)
        .map((_, index) => (
          <Grid key={index} item sm={4}>
            <TextField
              label="Item"
              name={`Item` + `${index}`}
              value={targetItems[`Item` + `${index}`]}
              onChange={handleTargetItemArray}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default Upgrade;
