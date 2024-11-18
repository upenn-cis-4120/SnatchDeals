import { Box, Paper, ButtonBase } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const FloatingBackButton = () => {
  const navigate = useNavigate();
  return (
    <Box
      mx={2}
      sx={{
        position: "fixed",
        top: 15,
        height: "36px",
        width: "36px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          height: "100%",
          width: "100%",
          bgcolor: "info.light",
          borderRadius: 2
        }}
      >
        <ButtonBase onClick={() => navigate(-1)} sx={{height: "100%", width: "100%" }}>
          <ArrowBackIcon />
        </ButtonBase>
      </Paper>
    </Box>
  );
};

export default FloatingBackButton;
