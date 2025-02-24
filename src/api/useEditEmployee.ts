import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useEditEmployee = () => {
  const [editEmployeeIsLoading, setEditEmployeeIsLoading] = useState(false);
  const [editEmployeeError, setEditEmployeeError] = useState("");

  const editEmployee = async (
    employeeId: string,
    payload: {
      name?: string;
      job?: string;
    }
  ) => {
    try {
      setEditEmployeeIsLoading(true);

      // PATCH => mengganti beberapa field dalam object/record/data
      // PUT => mengganti keseluruhan

      await axiosInstance.patch(`/employees/${employeeId}`, {
        name: payload.name ? payload.name : undefined,
        job: payload.job ? payload.job : undefined,
      });
    } catch (error) {
      setEditEmployeeError((error as TypeError).message);
    } finally {
      setEditEmployeeIsLoading(false);
    }
  };

  return {
    editEmployee,
    editEmployeeIsLoading,
    editEmployeeError,
  };
};
