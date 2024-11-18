import { ButtonBase, Paper, Box, Typography } from "@mui/material"
import FlatwareIcon from '@mui/icons-material/Flatware';

const HomeSpecialCategoryButton = () => {
    return (
        <ButtonBase sx={{ height: "6vh", width: "100%" }}>
        <Paper
          elevation={2}
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box height={"100%"} width={"100%"} display={"flex"} alignItems={"center"} sx={{bgcolor: "info.light"}}>
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
              <FlatwareIcon color="warning" sx={{ mr: 0.5 }} />{" "}
              <Box width={"100%"} textAlign={"center"}>
                Lunch deals
              </Box>
            </Typography>
          </Box>
        </Paper>
      </ButtonBase>
    )
}

export default HomeSpecialCategoryButton