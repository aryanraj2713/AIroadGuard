import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(location, time, flag, camid) {
  return { location, time, flag, camid };
}

const rows = [
  createData("Potheri", "08:56", "true", "E9H45"),
  createData("Guduvenchary", "08:56", "true", "E9H64"),
  createData("Potheri", "09:02", "true", "E9H34"),
  createData("Potheri", "09:02", "true", "E9H68"),
  createData("Maraimalai Nagar", "09:08", "true", "E9H67"),
  createData("KattanKulathur", "09:09", "true", "E9H90"),
];

export default function CustomizedTables() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">isAccident</StyledTableCell>
            <StyledTableCell align="right">Delay</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.camid}>
              <StyledTableCell component="th" scope="row">
                {row.location}
              </StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">{row.flag}</StyledTableCell>
              <StyledTableCell align="right">{row.camid}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
