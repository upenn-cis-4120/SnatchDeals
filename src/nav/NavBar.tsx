import { useState } from "react";
import { Button, BottomNavigation, Paper } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, width: "50vh" }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={tabValue}
          onChange={(_event, newTabValue) => {
            setTabValue(newTabValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={() => navigate("/")}
          />
          <BottomNavigationAction label="Categories" icon={<AppsIcon />} onClick={() => navigate("/categories")} />
          <BottomNavigationAction label="Explore" icon={<SearchIcon />} />
          <BottomNavigationAction label="Brands" icon={<DynamicFeedIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default NavBar;