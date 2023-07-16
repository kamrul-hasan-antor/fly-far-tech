import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

const FlightDetails = ({ isReturned, isActive }) => {
  return (
    <Box sx={{ display: `${isActive === 1 ? "block" : "none"}` }}>
      <Grid
        pb={2}
        borderRadius={2}
        p={2}
        sx={{
          justifyContent: "space-between",
        }}
        container
      >
        {/* 1 */}
        <Grid item xs={12} sm={2.5}>
          <Avatar
            sx={{
              border: "2px solid #525371",
              width: "40px",
              height: "40px",
            }}
            alt="Biman Bangladesh Airlines Logo"
            src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/BG.png"
          />
          <Typography mt={1} color={"secondary."}>
            Biman Bangladesh Airlines
          </Typography>
          <Typography color={"primary"} sx={{ fontSize: ".75rem" }}>
            BG 617
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".75rem" }}
          >
            Operated by: BG
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".75rem" }}
          >
            Economy: G
          </Typography>
        </Grid>

        {/* 2 */}
        <Grid item xs={9} sm={3}>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".75rem" }}
          >
            Depart
          </Typography>
          <Typography color={"secondary"} sx={{ fontSize: "1.50rem" }}>
            {isReturned ? "JFK" : "DAC"}
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Dhaka, BD | 15.00
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Terminal, Hazrat Shah Jalal International Airport
          </Typography>
          <Typography sx={{ fontSize: ".80rem", color: "#52537179" }}>
            Sun, 3rd June 2022
          </Typography>
        </Grid>

        {/* 3 */}
        <Grid item xs={3} sm={2}>
          <Typography sx={{ fontSize: ".80rem", color: "#52537179" }}>
            55 Minutes
          </Typography>
        </Grid>

        {/* 4 */}
        <Grid item xs={9} sm={3}>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".75rem" }}
          >
            Depart
          </Typography>
          <Typography color={"secondary"} sx={{ fontSize: "1.50rem" }}>
            DXB
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Dhaka, BD | 15.00
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Terminal, Hazrat Shah Jalal International Airport
          </Typography>
          <Typography sx={{ fontSize: ".80rem", color: "#52537179" }}>
            Sun, 3rd June 2022
          </Typography>
        </Grid>
      </Grid>

      {/* ------------------------------------------------ */}

      <Typography
        color={"secondary.contrastText"}
        p={0.5}
        sx={{
          backgroundColor: "#32d0966e",
          width: {
            md: "75%",
          },
          margin: "0 auto",
          textAlign: "center",
          fontSize: ".85rem",
        }}
      >
        Change planes at International || Kuwait || KW || Kuwait (KWI),
        Connecting Time: 04h:10m
      </Typography>

      {/* ------------------------------------------------ */}
      <Grid
        pb={2}
        borderRadius={2}
        p={2}
        sx={{
          justifyContent: "space-between",
        }}
        container
      >
        {/* 1 */}
        <Grid item xs={12} sm={2.5}>
          <Avatar
            sx={{
              border: "2px solid #525371",
              width: "40px",
              height: "40px",
            }}
            alt="Biman Bangladesh Airlines Logo"
            src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/BG.png"
          />
          <Typography mt={1} color={"secondary."}>
            Biman Bangladesh Airlines
          </Typography>
          <Typography color={"primary"} sx={{ fontSize: ".75rem" }}>
            BG 617
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".75rem" }}
          >
            Operated by: BG
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".75rem" }}
          >
            Economy: G
          </Typography>
        </Grid>

        {/* 2 */}
        <Grid item xs={9} sm={3}>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".75rem" }}
          >
            Depart
          </Typography>
          <Typography color={"secondary"} sx={{ fontSize: "1.50rem" }}>
            DXB
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Dhaka, BD | 15.00
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Terminal, Hazrat Shah Jalal International Airport
          </Typography>
          <Typography sx={{ fontSize: ".80rem", color: "#52537179" }}>
            Sun, 3rd June 2022
          </Typography>
        </Grid>

        {/* 3 */}
        <Grid item xs={3} sm={2}>
          <Typography sx={{ fontSize: ".80rem", color: "#52537179" }}>
            55 Minutes
          </Typography>
        </Grid>

        {/* 4 */}
        <Grid item xs={9} sm={3}>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".75rem" }}
          >
            Depart
          </Typography>
          <Typography color={"secondary"} sx={{ fontSize: "1.50rem" }}>
            {isReturned ? "DAC" : "JFK"}
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Dhaka, BD | 15.00
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Terminal, Hazrat Shah Jalal International Airport
          </Typography>
          <Typography sx={{ fontSize: ".80rem", color: "#52537179" }}>
            Sun, 3rd June 2022
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlightDetails;
