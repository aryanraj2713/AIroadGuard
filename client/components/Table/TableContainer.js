import * as React from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
  createData("Potheri", "11:01:39", "true", "E9H45"),
  createData("Potheri", "08::42:56", "true", "E9H45"),
  createData("Guduvenchary", "08:09:56", "true", "E9H64"),
  createData("Potheri", "09:43:02", "true", "E9H34"),
];
function sleep() {
  ms = getRandom(2, 10) * 1000;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function CustomizedTables({ accidentData }) {
  console.log(accidentData);
  //   console.log(accidentData);
  //   const refreshData = () => {
  //     if (process.browser) {
  //       Router.push("/");
  //     }
  //   };
  //   setTimeout(() => {
  //     refreshData();
  //   }, 5000);
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">isAccident</StyledTableCell>
            <StyledTableCell>Camera Id</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow>
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

export async function getServerSideProps() {
  try {
    axios
      .get("http://localhost:8080/api/accident/getAccident")
      .then((getResponse) => {
        console.log("GET Response");
        console.log(getResponse.data);
        data = getResponse.data;
        const accidentData = data;
      })
      .catch(function (error) {
        console.log("Error while fetching market updates");
      });
    const accidentData = data.accidentData;
    console.log(accidentData);

    return { props: { accidentData } };
  } catch (error) {
    console.log(error);
  }
}
// import * as React from "react";
// import axios from "axios";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// function createData(location, time, camid) {
//   return { location, time, camid };
// }

// const data = await axios.get("http://localhost:8080/api/accident/getAccident", {
//   headers: { cameraID: "ENH45" },
// });

// function getRandom(min, max) {
//   return Math.random() * (max - min) + min;
// }

// const rows = [
//   createData("Potheri", "08:56", "E9H45"),
//   createData("Guduvenchary", "08:56", "E9H64"),
//   createData("Potheri", "09:02", "E9H34"),
//   createData("Potheri", "09:02", "E9H68"),
//   createData("Maraimalai Nagar", "09:08", "E9H67"),
//   createData("KattanKulathur", "09:09", "E9H90"),
// ];

// export default function CustomizedTables() {
//   return (
//     <TableContainer>
//       <Table sx={{ minWidth: 500 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Location</StyledTableCell>
//             <StyledTableCell align="right">Time</StyledTableCell>
//             <StyledTableCell align="right">Camera</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>{renderAccidents(data)}</TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
