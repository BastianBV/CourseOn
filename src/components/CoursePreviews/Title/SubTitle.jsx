import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SubTitle = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: 600,
        justifyContent: "flex-start",
        "@media (max-width:768px)": { width: 222, height: 600 },
      }}
    >
      <Typography sx={{ fontSize: 23 }}>{text}</Typography>
    </Box>
  );
};

export default SubTitle;
