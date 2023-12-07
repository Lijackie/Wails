import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const MvpDrop = ({
  mvpDrops,
  setMvpDrops,
  itemEquipDb,
  itemEtcDb,
  itemUsableDb,
}) => {
  const handleChange = (event) => {
    //debounced(event);
    setMvpDrops({ ...mvpDrops, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Grid item sm={4}>
        {itemEquipDb && itemEtcDb && itemUsableDb ? (
          <TextField
            inputProps={{
              style: { width: 215 },
            }}
            label="Item (Id or AegisName)"
            name="Item"
            value={mvpDrops.Item}
            onChange={handleChange}
          />
        ) : (
          <TextField
            inputProps={{
              style: { width: 215 },
            }}
            label="Item AegisName"
            name="Item"
            value={mvpDrops.Item}
            onChange={handleChange}
          />
        )}
      </Grid>
      <Grid item sm={3}>
        <TextField
          type="number"
          label="Rate"
          name="Rate"
          value={mvpDrops.Rate}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={3}>
        <TextField
          label="RandomOptionGroup"
          name="RandomOptionGroup"
          value={mvpDrops.RandomOptionGroup}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={2}>
        <TextField
          value={mvpDrops.Index}
          label="Index"
          name="Index"
          onChange={handleChange}
        />
      </Grid>
    </>
  );
};

export default MvpDrop;
