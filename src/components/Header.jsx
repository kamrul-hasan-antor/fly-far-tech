import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  SvgIcon,
  Typography,
} from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Container
      sx={{
        display: {
          md: "flex",
        },
        justifyContent: "center",
        paddingTop: "60px",
        width: {
          xs: "100%",
          md: "95%",
          lg: "75%",
        },
        height: "100%",
      }}
    >
      {/*  --------------- flight selection side ----------------*/}

      <Grid
        pb={2}
        borderRadius={2}
        p={2}
        sx={{
          backgroundColor: "white",
          width: {
            xs: "100%",
            md: "100%",
            lg: "75%",
          },
          justifyContent: "space-between",
        }}
        container
      >
        {/* ------ flight Name -------- */}
        <Grid item xs={12} sm={2.5}>
          <Avatar
            sx={{
              border: "2px solid #525371",
              width: "45px",
              height: "45px",
            }}
            alt="Biman Bangladesh Airlines Logo"
            src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/BG.png"
          />
          <Typography mt={1}>Biman Bangladesh Airlines</Typography>
          <Typography color={"primary"} sx={{ fontSize: ".75rem" }}>
            BG 178 | w & BG 671 | E
          </Typography>
        </Grid>

        {/* ------ Departure Area and Time -------- */}
        <Grid item xs={9} sm={3}>
          <Typography color={"secondary"} sx={{ fontSize: "1.75rem" }}>
            DAC
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            Hazrat Shahjalal Intl Airport
          </Typography>
          <Typography
            color={"primary"}
            sx={{ fontSize: ".90rem", fontWeight: 500 }}
          >
            19:05
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            SUN 4TH JUL 2022
          </Typography>
        </Grid>

        {/* ------ Icon of Flights -------- */}
        <Grid item xs={3} sm={2.5} sx={{ position: "relative" }}>
          <Box
            sx={{
              transform: {
                xs: "rotate(-180deg)",
                sm: "rotate(90deg)",
              },
              padding: "5px",
              width: "max-content",
              cursor: "pointer",
            }}
          >
            <SvgIcon
              sx={{
                strokeWidth: "0.5px",
                stroke: "#525371",
                fill: "none",
                fontSize: {
                  xs: "75px",
                  sm: "60px",
                },
              }}
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path>
            </SvgIcon>
          </Box>
          <Box
            sx={{
              transform: {
                sm: "rotate(-90deg)",
              },
              padding: "5px",
              width: "max-content",
              cursor: "pointer",
              position: "absolute",
              top: {
                sm: "30px",
              },
              left: {
                xs: "3px",
                sm: "10px",
              },
            }}
          >
            <SvgIcon
              sx={{
                strokeWidth: "0.5px",
                stroke: "#525371",
                fill: "none",
                fontSize: {
                  xs: "75px",
                  sm: "60px",
                },
              }}
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path>
            </SvgIcon>
          </Box>
        </Grid>

        {/* ------ Destination Area and Time -------- */}

        <Grid item xs={9} sm={3}>
          <Typography color={"secondary"} sx={{ fontSize: "1.75rem" }}>
            JFK
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            JF Kennedy Intl Airport
          </Typography>
          <Typography
            color={"primary"}
            sx={{ fontSize: ".90rem", fontWeight: 500 }}
          >
            12:05
          </Typography>
          <Typography
            color={"secondary.contrastText"}
            sx={{ fontSize: ".85rem" }}
          >
            SUN 6TH JUL 2022
          </Typography>
        </Grid>
      </Grid>

      {/*--------------- pricing side ---------------- */}
      <Box
        borderRadius={2}
        sx={{
          backgroundColor: "white",
          width: {
            xs: "100%",
            md: "10%",
            lg: "20%",
          },
          padding: {
            md: "8px 0",
          },
        }}
      >
        <Box
          p={2}
          sx={{
            borderLeft: {
              xs: "0px",
              md: "2px dotted #525371",
            },
            borderTop: {
              md: "0px",
              xs: "2px dotted #525371",
            },
            borderBottom: "0px",
            height: "100%",
            display: {
              xs: "flex",
            },
            flexDirection: {
              md: "column",
            },
            justifyContent: {
              xs: "space-between",
              md: "center",
            },
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            $1850
          </Typography>
          <Button variant="contained">Book Now</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
