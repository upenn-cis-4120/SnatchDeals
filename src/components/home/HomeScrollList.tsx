import * as React from "react";
import HomeCard from "./HomeCard";
import ImageList from "@mui/material/ImageList";
import {
  Box,
  CardActionArea,
  CardMedia,
  Grid2,
  Container,
  Button,
  ButtonBase,
} from "@mui/material";
import Link from "react-router-dom";
import deals from "../../data/deals.json";
import DealDataInterface from "../../interfaces/DealDataInterface";

export default function HomeScrollList() {
  return (
    <Box sx={{ p: 0, m: 0 }}>
      <ImageList
        sx={{
          gridAutoFlow: "column",
          gridTemplateColumns: "2% repeat(auto-fit, 35%) !important",
          gridAutoColumns: "35%",
          justifyContent: "flex-start",
          py: 0.5,
          px: 0,
          m: 0,
        }}
      >
        <Box />
        {dealDataArray.map(({ brandName, dealDescription, newPrice, oldPrice }, index) => (
          <Container sx={{ pl: 0, pr: 1 }}>
            <HomeCard
              index={index}
              cardTitle={brandName}
              body={dealDescription}
              newPrice={newPrice}
              oldPrice={oldPrice}
            />
          </Container>
        ))}
      </ImageList>
    </Box>
  );
}

const dealDataArray: Array<DealDataInterface> = JSON.parse(JSON.stringify(deals)).dealsList;
