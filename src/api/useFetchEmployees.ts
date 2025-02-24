import { useState } from "react";
import { axiosInstance } from "../lib/axios";

type EmployeeResponse = {
  id: string;
  name: string;
  job: string;
};

export const useFetchEmployees = () => {
  const [employees, setEmpoyees] = useState<EmployeeResponse[]>([]);
  const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
  const [employeesError, setEmployeesError] = useState("");

  const fetchEmployees = async () => {
    try {
      setEmployeesIsLoading(true);

      // const response = await fetch("http://localhost:2000/employees", {
      //   method: "GET",
      // });

      // const responseJson = (await response.json()) as EmployeeResponse[]; //array of objects

      // const response = await axios.get<EmployeeResponse[]>("http://localhost:2000/employees");

      const response = await axiosInstance.get<EmployeeResponse[]>(
        "/employees"
      );

      setEmpoyees(response.data);
      // console.log(responseJson);
    } catch (e) {
      // setEmployeesError("Gagal mendapat data employee")
      // alert("Gagal mendapat data employee" + " || " + e);
      setEmployeesError((e as TypeError).message);
    } finally {
      setEmployeesIsLoading(false);
    }
  };

  return {
    fetchEmployees,
    isLoading: employeesIsLoading,
    errorMessage: employeesError,
    data: employees,
  };
};
