import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Drop = ({ drops, setDrops, itemEquipDb, itemEtcDb, itemUsableDb }) => {

  const debounced = useDebouncedCallback(
    // function
    (event) => {
      setDrops({ ...drops, [event.target.name]: event.target.value });
    },
    // delay in ms
    1000
  );

  const handleChange = (event) => {
    //debounced(event);
    setDrops({ ...drops, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Grid item sm={3}>
        {
          itemEquipDb && itemEtcDb && itemUsableDb ? (
            <TextField value={drops.Item} label="Item (Id or AegisName)" name="Item" onChange={handleChange} />
          ) : (
            <TextField value={drops.Item} label="Item AegisName" name="Item" onChange={handleChange} />
          )
        }
      </Grid>
      <Grid item sm={2}>
        <TextField value={drops.Rate} type="number" label="Rate" name="Rate" onChange={handleChange} />
      </Grid>
      <Grid item sm={3}>
        {/* <TextField
          label="StealProtected"
          name="StealProtected"
          onChange={handleChange}
        /> */}
        <FormControl>
          <FormLabel>StealProtected</FormLabel>
          <RadioGroup
            row
            name="StealProtected"
            onChange={handleChange}
            value={drops.StealProtected}
          >
            <FormControlLabel
              value="true"
              control={<Radio />}
              label="true"
            />
            <FormControlLabel value="false" control={<Radio />} label="false" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item sm={2}>
        <TextField
          label="RandomOptionGroup"
          name="RandomOptionGroup"
          onChange={handleChange}
          value={drops.RandomOptionGroup}
        />
      </Grid>
      <Grid item sm={2}>
        <TextField value={drops.Index} label="Index" name="Index" onChange={handleChange} />
      </Grid>
    </>
  );
};

export default Drop;
