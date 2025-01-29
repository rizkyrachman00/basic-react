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
      <h1>Selamat Datang Di Halaman Depan</h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Link to="/product">Klik disini untuk ke Halaman Produk</Link>
        <Link to="/about">Halaman About</Link>
        <Link to="/contact">Halaman Kontak</Link>
      </div>

      <button onClick={handleNavigateToTerms}>Link Terms Page</button>
    </>
  );
};

export default HomePage;
