import { useState } from "react";
import { useFetchEmployees } from "../api/useFetchEmployees";
import { useCreateEmployee } from "../api/useCreateEmployee";
import { useDeleteEmployee } from "../api/useDeleteEmployee";
import { useEditEmployee } from "../api/useEditEmployee";

const EmployeesPage = () => {
  const [inputText, setInputText] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [editTextInput, setEditTextInput] = useState("");
  const [editJobTextInput, setEditJobTextInput] = useState("");

  const { data, errorMessage, isLoading, fetchEmployees } = useFetchEmployees();
  const { createEmployee, createEmployeeIsLoading, createEmployeeError } =
    useCreateEmployee();
  const { deleteEmployee, deleteEmployeeIsLoading, deleteEmployeeError } =
    useDeleteEmployee();
  const { editEmployee, editEmployeeIsLoading, editEmployeeError } =
    useEditEmployee();

  const handleCreateEmployee = async () => {
    await createEmployee(inputText);
    await fetchEmployees();
    setInputText("");
  };

  const handleDeleteEmployee = async (employeeId: string) => {
    await deleteEmployee(employeeId);
    await fetchEmployees();
  };

  const handleEditEmployee = async () => {
    if (selectedEmployeeId && (editTextInput || editJobTextInput)) {
      await editEmployee(selectedEmployeeId, {
        name: editTextInput,
        job: editJobTextInput,
      });
      await fetchEmployees();
      setSelectedEmployeeId("");
      setEditTextInput("");
      setEditJobTextInput("");
    }
  };

  return (
    <div>
      <h1>Employees Page</h1>
      <button disabled={isLoading} onClick={fetchEmployees}>
        Fetch Employees API
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Action</th>
            <th>Select Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>
                  <button onClick={() => handleDeleteEmployee(item.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <input
                    checked={item.id === selectedEmployeeId}
                    onChange={() => {
                      setSelectedEmployeeId(item.id);
                      setEditTextInput(item.name);
                      setEditJobTextInput(item.job);
                    }}
                    type="radio"
                    name="employee-edit"
                  />
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
            <td>
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

          <tr>
            <td colSpan={2}>
              <input
                onChange={(e) => setEditTextInput(e.target.value)}
                type="text"
                value={editTextInput}
              />
            </td>
            <td>
              <input
                type="text"
                value={editJobTextInput}
                onChange={(e) => setEditJobTextInput(e.target.value)}
              />
            </td>
            <td>
              <button
                disabled={editEmployeeIsLoading || !selectedEmployeeId}
                onClick={handleEditEmployee}
              >
                Update Employee
              </button>
            </td>
          </tr>

          {createEmployeeError && (
            <tr>
              <td colSpan={3}>{createEmployeeError}</td>
            </tr>
          )}
        </tfoot>
      </table>

      <h1>{selectedEmployeeId}</h1>

      {isLoading && <p>Loading ....</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {/* {employeesIsLoading ? <p>Loading ....</p> : null} */}
    </div>
  );
};

export default EmployeesPage;
