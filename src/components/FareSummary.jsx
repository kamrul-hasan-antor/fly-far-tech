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
    type: "Adult",
    baseFare: 4090,
    tax: 245,
    serviceFee: 0,
  },
  {
    id: 2,
    type: "Adult",
    baseFare: 4090,
    tax: 245,
    serviceFee: 0,
  },
  {
    id: 3,
    type: "Adult",
    baseFare: 4090,
    tax: 245,
    serviceFee: 0,
  },
];

const FareSummary = ({ isActive }) => {
  console.log(isActive);
  return (
    <Box sx={{ display: `${isActive === 2 ? "block" : "none"}` }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ minWidth: "100%" }}>
            <TableRow sx={{ backgroundColor: "#32d095" }}>
              <TableCell align="left">Pax Type(g)</TableCell>
              <TableCell align="left">Base Fee(BDt)</TableCell>
              <TableCell align="left">Tax(BDT)</TableCell>
              <TableCell align="center">Total(BDT)</TableCell>
              <TableCell align="center">Service Fee(BDT)</TableCell>
              <TableCell align="center">Sub Total(BDT)</TableCell>
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
                <TableCell align="left">{data.type}</TableCell>
                <TableCell align="left">{data.baseFare}</TableCell>
                <TableCell align="left">{data.tax}</TableCell>
                <TableCell align="center">{data.serviceFee}</TableCell>
                <TableCell align="center">{0}</TableCell>
                <TableCell align="center">{data.baseFare + data.tax}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FareSummary;
