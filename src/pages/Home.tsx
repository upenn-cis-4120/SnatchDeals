import HomeScrollList from "../components/home/HomeScrollList";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  CardActionArea,
  CardMedia,
  Grid2,
  ButtonBase,
  Typography,
} from "@mui/material";
import HomeSpecialCategoryButton from "../components/home/HomeSpecialCategoryButton";
import { useNavigate } from "react-router-dom";

export default function Home() {
  //   const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  return (
    <Box sx={{ alignItems: "flex-start", minHeight: "100vh", pb: 7 }}>
      <Box sx={{}}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`images/homepage-promo-banner.png`}
            sx={{
              width: "100%",
              height: "25vh",
              objectFit: "cover",
            }}
          />
        </CardActionArea>
      </Box>
      {/* <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        backButton={<></>}
        nextButton={<></>}
      /> */}
      <Box sx={{ my: 0.5 }}>
        <Grid2 container>
          <Grid2>
            <ButtonBase sx={{ px: 2, py: 0.5 }}>
              <Typography variant="h5">For You</Typography>
            </ButtonBase>
          </Grid2>
          <Grid2 size="grow"></Grid2>
          <Grid2>
            <ButtonBase sx={{ alignItems: "center", height: "100%", px: 2 }}>
              <NavigateNextIcon />
            </ButtonBase>
          </Grid2>
        </Grid2>
      </Box>
      <HomeScrollList />
      <Box
        sx={{
          backgroundImage: `url(public/images/ui/homepage-special-deals.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "contain",
          height: "9vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid2 container alignItems="center" height="100%" spacing={2} px={2}>
          <Grid2 size={4}>
            <HomeSpecialCategoryButton />
          </Grid2>
          <Grid2 size={4}>
            <HomeSpecialCategoryButton />
          </Grid2>
          <Grid2 size={4}>
            <HomeSpecialCategoryButton />
          </Grid2>
        </Grid2>
      </Box>
      <Box sx={{ my: 0.5 }}>
        <Grid2 container>
          <Grid2>
            <ButtonBase sx={{ px: 2, py: 0.5 }} onClick={() => navigate("/categories/food", {state: {category: "Fast Food"}})}>
              <Typography variant="h5">Fast Food</Typography>
            </ButtonBase>
          </Grid2>
          <Grid2 size="grow"></Grid2>
          <Grid2>
            <ButtonBase sx={{ alignItems: "center", height: "100%", px: 2 }} onClick={() => navigate("/categories/food", {state: {category: "Fast Food"}})}>
              <NavigateNextIcon />
            </ButtonBase>
          </Grid2>
        </Grid2>
      </Box>
      <HomeScrollList />
    </Box>
  );
}
