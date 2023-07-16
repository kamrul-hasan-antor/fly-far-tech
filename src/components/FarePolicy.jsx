import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const FarePolicy = ({ isActive }) => {
  return (
    <Box sx={{ display: `${isActive === 3 ? "block" : "none"}` }} p={2}>
      <Grid container gap={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={5}>
          <Typography
            mb={2}
            sx={{
              backgroundColor: "#32d0966e",
              padding: "5px 25px",
              width: {
                xs: "90%",
                sm: "40%",
              },
              textAlign: "center",
            }}
          >
            Cancellation
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Refund Amount * Paid Amount - Airline Cancelation Fee
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography
            mb={2}
            sx={{
              backgroundColor: "#32d0966e",
              padding: "5px 25px",
              width: {
                xs: "90%",
                sm: "40%",
              },
              textAlign: "center",
            }}
          >
            Void
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Reissue Fee * Airlines Fee + Fare Difference
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography
            mb={2}
            sx={{
              backgroundColor: "#32d0966e",
              padding: "5px 25px",
              width: {
                xs: "90%",
                sm: "40%",
              },
              textAlign: "center",
            }}
          >
            Re-issue
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Reissue Fee * Airlines Fee + Fare Difference
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography
            mb={2}
            sx={{
              backgroundColor: "#32d0966e",
              padding: "5px 25px",
              width: {
                xs: "90%",
                sm: "40%",
              },
              textAlign: "center",
            }}
          >
            Refund
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Reissue Fee * Airlines Fee + Fare Difference
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FarePolicy;
