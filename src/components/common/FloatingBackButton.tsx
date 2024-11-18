import { Box, Paper, ButtonBase } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

const FloatingBackButton = () => {
  const navigate = useNavigate();
  return (
    <Box
      mx={2}
      sx={{
        position: "fixed",
        top: 15,
        height: "40px",
        width: "40px",
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
          <CloseIcon />
        </ButtonBase>
      </Paper>
    </Box>
  );
};

export default FloatingBackButton;
