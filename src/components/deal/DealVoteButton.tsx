import { Box, ButtonBase, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownTwoToneIcon from "@mui/icons-material/ThumbDownTwoTone";
import DealVoteButtonProps from "../../interfaces/props/DealVoteButtonProps";
import DealDataInterface from "../../interfaces/DealDataInterface";
import deals from "../../data/deals.json";
import { useState } from "react";

const DealVoteButton: React.FC<DealVoteButtonProps> = (props) => {
  const dealData = dealDataArray[props.index];
  const [clickedState, useClickedState] = useState(false);
  const { numUpvote, numDownvote } = dealData;
  return (
    <ButtonBase
      sx={{ height: "100%", width: "100%" }}
      onClick={() => useClickedState(!clickedState)}
    >
      {props.variant === "upvote" ? (
        <>
          <Typography
            variant={"body1"}
            sx={{
              display: "flex",
              alignItems: "center",
              mx: 2,
              width: "100%",
            }}
          >
            {clickedState ? (
              <ThumbUpIcon sx={{ color: "green" }} />
            ) : (
              <ThumbUpTwoToneIcon />
            )}
            <Box px={1} width="100%">{clickedState ? numUpvote + 1 : numUpvote}</Box>
          </Typography>
        </>
      ) : (
        <>
          <Typography
            variant={"body1"}
            sx={{
              display: "flex",
              alignItems: "center",
              mx: 2,
              width: "100%",
            }}
          >
            {clickedState ? (
              <ThumbDownIcon sx={{ color: "warning.light" }} />
            ) : (
              <ThumbDownTwoToneIcon />
            )}
            <Box px={1} width="100%">{clickedState ? numDownvote + 1 : numDownvote}</Box>
          </Typography>
        </>
      )}
    </ButtonBase>
  );
};

export default DealVoteButton;

const dealDataArray: Array<DealDataInterface> = JSON.parse(
  JSON.stringify(deals)
).dealsList;
