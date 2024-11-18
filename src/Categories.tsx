

import React from 'react';
import CircularButton from "./buttonlayout";
import { useState } from "react";
import "./App.css";
import { FaPizzaSlice, FaMobile, FaGlassCheers, FaRegFutbol, FaShoppingCart } from 'react-icons/fa';
import { BsBagFill } from 'react-icons/bs';
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
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // 2 items per row
        gap: "40px", // Space between items
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        padding: "20px",
        marginTop: "20px", 
        boxSizing: "border-box",
        }}
      >
      <div style={{ textAlign: "center" }}>
        <CircularButton
          icon={<FaPizzaSlice color="white" size={35} />}
          onClick={() => alert("Pizza button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Food
        </p>
      </div>
      <div style={{ textAlign: "center" }}>  
        <CircularButton
          icon={<BsBagFill color="white" size={35} />}
          onClick={() => alert("Apple button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Shopping
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <CircularButton
          icon={<FaShoppingCart color="white" size={35} />}
          onClick={() => alert("Apple button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Grocery
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <CircularButton
          icon={<FaMobile color="white" size={35} />}
          onClick={() => alert("Apple button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Electronics
        </p>
      </div>
      <div>
        <CircularButton
          icon={<FaGlassCheers color="white" size={35} />}
          onClick={() => alert("Apple button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Events
        </p>
      </div>
      <div>
        <CircularButton
          icon={<FaRegFutbol color="white" size={35} />}
          onClick={() => alert("Apple button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Sports
        </p>
      </div>
      </div>
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