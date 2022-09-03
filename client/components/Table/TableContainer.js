import * as React from "react";
import axios from "axios";
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

function createData(location, time, camid) {
  return { location, time, camid };
}

const data = await axios.get("http://localhost:8080/api/accident/getAccident", {
  headers: { cameraID: "ENH45" },
});

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function sleep() {
  ms = getRandom(2, 10) * 1000;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function renderAccidents(accData) {
  for (let i = 0; i < length(accData); i++) {
    <StyledTableRow key={accDataaccData[i].cameraID}>
      <StyledTableCell component="th" scope="row">
        {accData[i].location}
      </StyledTableCell>
      <StyledTableCell align="right">{accData[i].time}</StyledTableCell>
      <StyledTableCell align="right">{accData[i].camid}</StyledTableCell>
    </StyledTableRow>;
    await sleep();
  }
}
const rows = [
  createData("Potheri", "08:56", "E9H45"),
  createData("Guduvenchary", "08:56", "E9H64"),
  createData("Potheri", "09:02", "E9H34"),
  createData("Potheri", "09:02", "E9H68"),
  createData("Maraimalai Nagar", "09:08", "E9H67"),
  createData("KattanKulathur", "09:09", "E9H90"),
];

export default function CustomizedTables() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Camera</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderAccidents(data)}</TableBody>
      </Table>
    </TableContainer>
  );
}
