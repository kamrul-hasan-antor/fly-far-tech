import { Box } from "@mui/material";
import React from "react";

const FareSummary = ({ isActive }) => {
  console.log(isActive);
  return <Box sx={{ display: `${isActive === 2 ? "block" : "none"}` }}>a</Box>;
};

export default FareSummary;
