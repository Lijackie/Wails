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
        <Tab style={{ textTransform: "none" }} label="設定 (Monster Settings)" component={Link} to="/" />
        <Tab style={{ textTransform: "none" }} label="物品掉落 (Drops)" component={Link} to="/drops" />
        <Tab style={{ textTransform: "none" }} label="MVP物品掉落 (MvpDrops)" component={Link} to="/mvpdrops" />
      </Tabs>
    </Box>
  );
};

export default Header;
