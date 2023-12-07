import { useRecoilState } from "recoil";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { ItemRandomoptGroupAtom, itemRandomoptDbAtom, uuidAtom, } from "../atoms";

const ItemRandomoptGroup = () => {
  const [itemRandomoptGroup, setItemRandomoptGroup] = useRecoilState(
    ItemRandomoptGroupAtom
  );
  const [itemRandomoptDb, setItemRandomoptDb] =
    useRecoilState(itemRandomoptDbAtom);

  const [uuid, setUUid] = useRecoilState(uuidAtom);

  const handleChange = (event) => {
    setItemRandomoptGroup({
      ...itemRandomoptGroup,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Grid key={uuid} container spacing={1}>
      <Grid item sm={12}>
        <TextField
          label="Id"
          name="Id"
          value={itemRandomoptGroup.Id}
          required
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={12}>
        <TextField
          label="Group"
          name="Group"
          value={itemRandomoptGroup.Group}
          required
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={12}>
        <TextField
          label="MaxRandom"
          name="MaxRandom"
          value={itemRandomoptGroup.MaxRandom}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={12}>
        <Typography variant="h6" component="h6" gutterBottom>
          item_randomopt_db.yml: {itemRandomoptDb ? "OK" : "Not Found"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ItemRandomoptGroup;
