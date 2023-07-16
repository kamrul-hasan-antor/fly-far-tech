import { Box } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const data = [
  {
    id: 1,
    baggage: "Adult",
    checkIn: "20 KG",
    cabin: "M",
  },
  {
    id: 2,
    baggage: "Child",
    checkIn: "20 KG",
    cabin: "M",
  },
  {
    id: 3,
    baggage: "Infant",
    checkIn: "20 KG",
    cabin: "M",
  },
];

const Baggage = ({ isActive }) => {
  return (
    <Box sx={{ display: `${isActive === 4 ? "block" : "none"}` }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ minWidth: "100%" }}>
            <TableRow sx={{ backgroundColor: "#32d095" }}>
              <TableCell align="left">Baggage(g)</TableCell>
              <TableCell align="left">Check-In</TableCell>
              <TableCell align="center">Cabin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow
                key={data.id}
                sx={{
                  backgroundColor: `${data.id % 2 !== 0 ? "#32d0966e" : ""}`,
                }}
              >
                <TableCell align="left">{data.baggage}</TableCell>
                <TableCell align="left">{data.checkIn}</TableCell>
                <TableCell align="center">{data.cabin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Baggage;
