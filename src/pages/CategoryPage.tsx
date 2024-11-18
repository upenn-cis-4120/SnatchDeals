import {
  Box,
  ButtonBase,
  Grid2,
  Typography,
} from "@mui/material";
import deals from "../data/deals.json";
import DealDataInterface from "../interfaces/DealDataInterface";
import HomeCard from "../components/home/HomeCard";


import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";

export default function CategoryPage() {
    const {state} = useLocation();
    const category = state.category;
  return (
    <>
      <Box
        sx={{
          alignItems: "flex-start",
          minHeight: "100vh",
          width: "100vw",
          maxWidth: "50vh",
          pb: 7,
        }}
      >
        <Box>
          <Box height={"6vh"} width="100%" display="flex">
            <ButtonBase>
              <Box height="100%" mx={1} display="flex" alignItems={"center"}>
                <ArrowBackIcon />
              </Box>
            </ButtonBase>
            <Box height="100%" width="100%" display="flex" alignItems={"center"} justifyContent={"center"}>
              <Typography component="span" variant="h5">
                {category}
              </Typography>
            </Box>
          </Box>
          <Grid2 container display={"flex"} mx={2} my={1} spacing={2}>
            {dealDataArray.map(
              ({ brandName, dealDescription, newPrice, oldPrice }, index) => (
                <Grid2 size={6}>
                  <HomeCard
                    index={index}
                    cardTitle={brandName}
                    body={dealDescription}
                    newPrice={newPrice}
                    oldPrice={oldPrice}
                  />
                </Grid2>
              )
            )}
          </Grid2>
        </Box>
      </Box>
    </>
  );
}

const dealDataArray: Array<DealDataInterface> = JSON.parse(
  JSON.stringify(deals)
).dealsList;
