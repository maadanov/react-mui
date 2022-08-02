import React from "react";
import useAsync from "react-hook-use-async";
import SpanningTable from "../components/table";
import { getEmployee } from "../requests";

const Employees = () => {
  const { result, error, isPending, execute } = useAsync(getEmployee);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SpanningTable employee={result} render={execute} />
    </div>
  );
};

export default Employees;
