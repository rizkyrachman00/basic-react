import { useState } from "react";
import { useFetchEmployees } from "../api/useFetchEmployees";
import { useCreateEmployee } from "../api/useCreateEmployee";
import { useDeleteEmployee } from "../api/useDeleteEmployee";

const EmployeesPage = () => {
  const [inputText, setInputText] = useState("");

  const { data, errorMessage, isLoading, fetchEmployees } = useFetchEmployees();
  const { createEmployee, createEmployeeIsLoading, createEmployeeError } =
    useCreateEmployee();
  const { deleteEmployee, deleteEmployeeIsLoading, deleteEmployeeError } =
    useDeleteEmployee();

  const handleCreateEmployee = async () => {
    await createEmployee(inputText);
    await fetchEmployees();
    setInputText("");
  };

  const handleDeleteEmployee = async (employeeId: string) => {
    await deleteEmployee(employeeId);
    await fetchEmployees();
  };

  return (
    <div>
      <h1>Employees Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => handleDeleteEmployee(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <input
                onChange={(e) => setInputText(e.target.value)}
                type="text"
                value={inputText}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              {/* <button
                disabled={createEmployeeIsLoading}
                onClick={()=>createEmployee(inputText)}
              >
                Create Employee
              </button> */}
              <button
                disabled={createEmployeeIsLoading}
                onClick={handleCreateEmployee}
              >
                Create Employee
              </button>
            </td>
          </tr>
          {createEmployeeError && (
            <tr>
              <td colSpan={2}>{createEmployeeError}</td>
            </tr>
          )}
        </tfoot>
      </table>
      <button disabled={isLoading} onClick={fetchEmployees}>
        Fetch Employees API
      </button>
      {isLoading && <p>Loading ....</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {/* {employeesIsLoading ? <p>Loading ....</p> : null} */}
    </div>
  );
};

export default EmployeesPage;
