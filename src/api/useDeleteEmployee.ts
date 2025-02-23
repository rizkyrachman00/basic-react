import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useDeleteEmployee = () => {
  const [deleteEmployeeIsLoading, setDeleteEmployeeIsLoading] = useState(false);
  const [deleteEmployeeError, setDeleteEmployeeError] = useState("");

  const deleteEmployee = async (employeeId: string) => {
    try {
      setDeleteEmployeeIsLoading(true);
      await axiosInstance.delete(`/employees/${employeeId}`);
    } catch (e) {
      setDeleteEmployeeError((e as TypeError).message);
    } finally {
      setDeleteEmployeeIsLoading(false);
    }
  };

  return {
    deleteEmployee,
    deleteEmployeeIsLoading,
    deleteEmployeeError,
  };
};
