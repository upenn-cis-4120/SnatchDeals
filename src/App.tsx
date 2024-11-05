import { useState } from "react";
import "./App.css";
import { Button, BottomNavigation, Paper } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import SettingsIcon from "@mui/icons-material/Settings";

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Button>Test123</Button>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            sx={{ fontFamily: '"Kaisei Tokumin"' }}
            icon={<HomeIcon />}
          />
          <BottomNavigationAction label="Categories" icon={<AppsIcon />} />
          <BottomNavigationAction label="Explore" icon={<SearchIcon />} />
          <BottomNavigationAction label="Brands" icon={<DynamicFeedIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default App;
