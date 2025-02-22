import { useState } from "react";

type Employee = {
  id: number;
  name: string;
};

const EmployeesPage = () => {
  const [employees, setEmpoyees] = useState<Employee[]>([]);

  const fetchEmployees = async () => {
    const response = await fetch("http://localhost:2000/employees", {
      method: "GET",
    });

    const responseJson = (await response.json()) as Employee[]; //array of objects

    setEmpoyees(responseJson);

    console.log(responseJson);
  };

  return (
    <div>
      <h1>Employees Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={fetchEmployees}>Fetch Employees API</button>
    </div>
  );
};

export default EmployeesPage;
