import { Link, useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToTerms = () => {
    navigate({
      pathname: "/terms",
    });
  };

  return (
    <>
      <h1>Ini halaman Homepage</h1>

      <Link to="/terms">Klik disini untuk ke Halaman Term</Link>

      <button onClick={handleNavigateToTerms}>Link Terms Page</button>
    </>
  );
};

export default HomePage;
