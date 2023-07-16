import { Box } from "@mui/material";
import React from "react";

const Baggage = ({ isActive }) => {
  return <Box sx={{ display: `${isActive === 4 ? "block" : "none"}` }}>x</Box>;
};

export default Baggage;
