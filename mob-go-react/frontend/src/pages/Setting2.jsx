import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Setting2 = () => {
  const arr = [
    "Id",
    "AegisName",
    "Name",
    "JapaneseName",
    "Level",
    "Hp",
    "Sp",
    "BaseExp",
    "JobExp",
    "MvpExp",
    "Attack",
    "Attack2",
    "Defense",
    "MagicDefense",
    "Resistance",
    "MagicResistance",
    "Str",
    "Agi",
    "Vit",
    "Int",
    "Dex",
    "Luk",
    "AttackRange",
    "SkillRange",
    "ChaseRange",
    "Size",
    "Race",
  ];
  const [mob, setMod] = useState({});

  const handleChange = (event) => {
    setMod({ ...mob, [event.target.name]: event.target.value });
  };

  return (
    <Grid>
      <Grid item sm={4}>
        {arr.map((item, index) => (
          <TextField
            key={index}
            label={item}
            name={item}
            required
            onChange={handleChange}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Setting2;
