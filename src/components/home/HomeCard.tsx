import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface HomeCardProps {
  cardTitle: string;
  body: string;
  newPrice: number;
  oldPrice: number;
  index: number;
}
export default function HomeCard({
  cardTitle,
  body,
  newPrice,
  oldPrice,
  index,
}: HomeCardProps) {
  const navigate = useNavigate();
  return (
    <>
      <CardActionArea onClick={() => navigate(`deals/${index}`, {state: {index: `${index}`}})}>
        <Paper variant="outlined">
          <CardMedia
            component="img"
            image={`images/${index}.jpg`}
            alt="shake shack burgers and fries"
            sx={{ aspectRatio: 1 }}
          />
        </Paper>
        <Box sx={{ py: 0.5, textAlign: "left" }}>
          <Typography variant="body2" fontWeight={600} noWrap>{cardTitle}</Typography>
          <Typography variant="body2" sx={{ pb: 0.5 }} noWrap>
            {body}
          </Typography>
          <Typography variant="h6" color="warning.light">
            ${newPrice} <span>   </span>
            <Typography component={"span"} variant="body2" color="warning" ml={0.25} style={{ textDecoration: "line-through"}}>
              ${oldPrice}
            </Typography>
          </Typography>
        </Box>
      </CardActionArea>
    </>
  );
}
