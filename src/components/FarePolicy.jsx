import { Box } from "@mui/material";
import React from "react";

const FarePolicy = ({ isActive }) => {
  return <Box sx={{ display: `${isActive === 3 ? "block" : "none"}` }}>b</Box>;
};

export default FarePolicy;
