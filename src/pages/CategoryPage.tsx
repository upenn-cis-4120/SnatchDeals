import { Box, ButtonBase, Grid2, Typography } from "@mui/material";
import deals from "../data/deals.json";
import DealDataInterface from "../interfaces/DealDataInterface";
import HomeCard from "../components/home/HomeCard";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
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
        <Box
          bgcolor={"white"}
          height={"6vh"}
          width="100%"
          display="flex"
          sx={{ position: "sticky", top: 0,}}
          zIndex={10}
        >
          <ButtonBase onClick={() => navigate(-1)}>
            <Box height="100%" mx={2} display="flex" alignItems={"center"}>
              <ArrowBackIcon />
            </Box>
          </ButtonBase>
          <Box
            height="100%"
            width="100%"
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography component="span" variant="h5">
              {category}
            </Typography>
          </Box>
        </Box>
        <Box width={"100%"}>
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
