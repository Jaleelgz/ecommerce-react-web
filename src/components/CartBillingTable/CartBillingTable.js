import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

export default function CartBillingTable() {
  const cart = useSelector((state) => state.cart.value);

  return (
    <Paper sx={{ mt: 10 }}>
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "600" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="right">
                Price
              </TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="right">
                Quantity
              </TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="right">
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">${row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">${row.price * row.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography sx={{ fontWeight: "600", textAlign: "right", p: 2 }}>
        Total : $
        {cart
          .reduce((n, { price, quantity }) => n + price * quantity, 0)
          ?.toFixed(2)}
      </Typography>
    </Paper>
  );
}
