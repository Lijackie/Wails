import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


const Slot = ({ index, slots, handleOptions, name, bonus, handleChange }) => {

  return (
    <>
      <Grid item sm={6}>
        {/* <TextField
          label="Option"
         value={slots[`${"slot" + index}Option`]}
          name={`${name}Option`}
          required
          onChange={handleChange}
        /> */}
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          selectOnFocus
          disableClearable
          value={slots[`${"slot" + index}Option`]}
          onChange={(event, newValue) => {
            handleOptions(
              event,
              bonus.findIndex((text) => text === newValue) + 1,
              `${name}Option`
            );
          }}
          onInputChange={(event, newValue) => {
            handleOptions(event, newValue, `${name}Option`);
          }}
          options={bonus.map((option) => option)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Option"
              value={slots[`${"slot" + index}Option`]}
              name={`${name}Option`}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Grid>
      <Grid item sm={2}>
        <TextField
          value={slots[`${"slot" + index}MinValue`]}
          label="MinValue"
          name={`${name}MinValue`}
          required
          autoComplete="off"
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={2}>
        <TextField
          value={slots[`${"slot" + index}MaxValue`]}
          label="MaxValue"
          name={`${name}MaxValue`}
          required
          autoComplete="off"
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={2}>
        <TextField
          value={slots[`${"slot" + index}Chance`]}
          label="Chance"
          name={`${name}Chance`}
          required
          autoComplete="off"
          onChange={handleChange}
        />
      </Grid>
      {/* <Grid item sm={2}>
        <TextField
          value={slots[`${"slot" + index}Param`]}
          label="Param"
          name={`${name}Param`}
          onChange={handleChange}
        />
      </Grid> */}
    </>
  );
};

export default Slot;
