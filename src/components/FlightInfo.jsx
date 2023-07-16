import { Box, Button, Container, Grid } from "@mui/material";
import React, { useState } from "react";

const FlightDetails = ({ isViewDetails, isReturned }) => {
  const [isActive, setIsActive] = useState(1);
  console.log(isActive);
  return (
    <Box
      sx={{
        display: {
          xs: `${isViewDetails ? "flex" : "none"}`,
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
        }}
      >
        <Grid container>
          <Grid item xs={6} sm={3}>
            <Button
              onClick={() => setIsActive(1)}
              variant={`${isActive === 1 ? "contained" : ""}`}
            >
              flight details
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              onClick={() => setIsActive(2)}
              variant={`${isActive === 2 ? "contained" : ""}`}
            >
              Fare Summery
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              onClick={() => setIsActive(3)}
              variant={`${isActive === 3 ? "contained" : ""}`}
            >
              Fare Policy
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              onClick={() => setIsActive(4)}
              variant={`${isActive === 4 ? "contained" : ""}`}
            >
              Baggage
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FlightDetails;
