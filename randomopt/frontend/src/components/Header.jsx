import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab style={{ textTransform: "none" }} label="Lapine Upgrade" component={Link} to="/" />
        <Tab style={{ textTransform: "none" }} label="Item Randomopt Group" component={Link} to="/group" />
        <Tab style={{ textTransform: "none" }} label="Slot 1" component={Link} to="/slot" />
        <Tab style={{ textTransform: "none" }} label="Slot 2" component={Link} to="/slot2" />
        <Tab style={{ textTransform: "none" }} label="Slot 3" component={Link} to="/slot3" />
        <Tab style={{ textTransform: "none" }} label="Slot 4" component={Link} to="/slot4" />
        <Tab style={{ textTransform: "none" }} label="Random" component={Link} to="/random" />
      </Tabs>
    </Box>
  );
};

export default Header;
