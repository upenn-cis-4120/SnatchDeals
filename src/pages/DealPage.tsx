import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Divider,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";
import * as React from "react";
import HomeScrollList from "../components/home/HomeScrollList";
import deals from "../data/deals.json";
import DealDataInterface from "../interfaces/DealDataInterface";
import { useLocation } from "react-router-dom";
import DealMapButton from "../components/deal/DealMapButton";
import DealVoteButton from "../components/deal/DealVoteButton";
import { Stack } from "@mui/material";
import FloatingBackButton from "../components/common/FloatingBackButton";

export default function DealPage() {
  const { state } = useLocation();
  const index: number = state.index;
  const dealData: DealDataInterface = dealDataArray[index];
  const dealLocationQueryUrl = encodeURI(dealData.brandName);
  return (
    <>
      <Box
        sx={{
          alignItems: "flex-start",
          minHeight: "100vh",
          width: "100vw",
          maxWidth: "50vh",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={`../../public/images/${index}.jpg`}
            sx={{
              width: "100%",
              height: "35vh",
              objectFit: "cover",
            }}
          />
        </CardActionArea>
        <FloatingBackButton />
        <Box sx={{ m: 2, textAlign: "left" }}>
          <Stack spacing={0.5} useFlexGap>
            <Typography variant="h6">{dealData.brandName}</Typography>
            <Typography variant="h6" fontWeight={400}>
              {dealData.dealDescription}
            </Typography>
            <Typography variant="body2">{dealData.dealDetails}</Typography>

            <Box display={"flex"} justifyContent={"center"} my={2}>
              <Grid2 container width={"40vw"}>
                <Grid2 size={5}>
                  <DealVoteButton index={index} variant="upvote" />
                </Grid2>
                <Grid2 size="grow" />
                <Grid2 size={5}>
                  <DealVoteButton index={index} variant="downvote" />
                </Grid2>
              </Grid2>
            </Box>

            <Box display={"flex"} justifyContent={"center"}>
              <Box width={"40vw"}>
                <DealMapButton
                  link={`http://maps.apple.com/?q=${dealLocationQueryUrl}`}
                />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

const dealDataArray: Array<DealDataInterface> = JSON.parse(
  JSON.stringify(deals)
).dealsList;
