import { useFetchEmployees } from "../api/useFetchEmployees";

const EmployeesPage = () => {
  const { data, errorMessage, isLoading, fetchEmployees } = useFetchEmployees();

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
          {data.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
              </tr>
            );
          })}
        </tbody>
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
