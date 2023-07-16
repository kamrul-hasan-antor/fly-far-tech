import { Box, Button, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import FlightDetails from "./FlightDetails";
import FareSummary from "./FareSummary";
import FarePolicy from "./FarePolicy";
import Baggage from "./Baggage";

const FlightInfo = ({ isViewDetails, isReturned }) => {
  const [isActive, setIsActive] = useState(1);

  const handleActive = (id) => {
    setIsActive(id);
  };
  return (
    <Box
      sx={{
        display: {
          xs: `${isViewDetails ? "block" : "none"}`,
        },
        width: {
          xs: "100%",
          lg: "75%",
        },
        height: "100%",
      }}
    >
      <Box
        pb={2}
        borderRadius={2}
        p={2}
        sx={{
          backgroundColor: "white",
          width: {
            xs: "100%",
          },
          borderBottomRightRadius: "0",
          borderBottomLeftRadius: "0",
        }}
      >
        <Grid container>
          <Grid item xs={6} sm={3}>
            <Button
              onClick={() => handleActive(1)}
              variant={`${isActive === 1 ? "contained" : ""}`}
            >
              flight details
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              onClick={() => handleActive(2)}
              variant={`${isActive === 2 ? "contained" : ""}`}
            >
              Fare Summary
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              onClick={() => handleActive(3)}
              variant={`${isActive === 3 ? "contained" : ""}`}
            >
              Fare Policy
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              onClick={() => handleActive(4)}
              variant={`${isActive === 4 ? "contained" : ""}`}
            >
              Baggage
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: "white" }}>
        <FlightDetails isActive={isActive} isReturned={isReturned} />
        <FareSummary isActive={isActive} />
        <FarePolicy isActive={isActive} />
        <Baggage isActive={isActive} />
      </Box>
    </Box>
  );
};

export default FlightInfo;
