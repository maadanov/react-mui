import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBodyC from "./tableBody";
import TableBody from "@mui/material/TableBody";

import { useEffect } from "react";

export type Employees = {
  id: number;
  name: string;
  lastName: string;
  workdays: number;
  wage: number;
};

type Props = {
  employee: Array<Employees>;
  render: any;
};

const SpanningTable: React.FC<Props> = ({ employee, render }) => {
  const [total, setTotal] = React.useState(0);

  return (
    <div className="w-[80%] my-[100px]">
      <TableContainer
        component={Paper}
        className="w-[80%]"
        sx={{ maxHeight: 540 }}
      >
        <Table sx={{ minWidth: 700 }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Workdays</TableCell>
              <TableCell>Wage</TableCell>
              <TableCell align="right">Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employee?.map((row: any) => (
              <TableBodyC employee={row} render={render} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell align="right">{total}</TableCell>
        </TableRow>
      </div>
    </div>
  );
};

export default SpanningTable;
