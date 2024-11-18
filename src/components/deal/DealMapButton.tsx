import { ButtonBase, Paper, Box, Typography } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import DealMapButtonProps from "../../interfaces/props/DealMapButtonProps";

const DealMapButton: React.FC<DealMapButtonProps> = (props) => {
  const link = props.link;
  return (
    <ButtonBase
      sx={{ height: "6vh", width: "100%" }}
      onClick={() => window.open(link)}
    >
      <Paper
        variant="outlined"
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          height={"100%"}
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          sx={{ bgcolor: "info.light" }}
        >
          <Typography
            variant={"body2"}
            fontWeight={600}
            sx={{
              display: "flex",
              alignItems: "center",
              mx: 1,
              width: "100%",
            }}
          >
            <NearMeIcon color="primary" sx={{ mr: 0.5 }} />{" "}
            <Box width={"100%"} textAlign={"center"}>
              Bring me there!
            </Box>
          </Typography>
        </Box>
      </Paper>
    </ButtonBase>
  );
};

export default DealMapButton;
