import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { useState } from "react";
import { changeData } from "../requests";
import { Employees } from "./table";

const TableBodyC = ({ employee, render }: any) => {
  const [data, setData] = useState(employee);

  const handleChange = (e: any, data: Employees) => {
    const { name, value } = e.target;
    setData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("asdasdas");
    changeData(data.id, data);
    render();
  };

  return (
    <>
      <TableRow key={data.id}>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.lastname}</TableCell>
        <TableCell>
          <input
            type="number"
            required
            name="workdays"
            defaultValue={data.workdays}
            onChange={(e: any) => handleChange(e, data)}
          />
        </TableCell>
        <TableCell>
          <input
            type="number"
            name="wage"
            required
            defaultValue={data.wage}
            onChange={(e: any) => handleChange(e, data)}
          />
        </TableCell>
        <TableCell align="right">{employee.workdays * employee.wage}</TableCell>
      </TableRow>
    </>
  );
};

export default TableBodyC;
