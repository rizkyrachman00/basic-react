import { Link } from "react-router";

const ProductPage = () => {
  return (
    <>
      <h1>Semua Produk Ada Disini</h1>
      <ul>
        <li>
          <Link to="/product/sepatu">Sepatu</Link>
        </li>
        <li>
          <Link to="/product/Baju">Baju</Link>
        </li>
        <li>
          <Link to="/product/Mclaren">McLaren</Link>
        </li>
      </ul>
    </>
  );
};

export default ProductPage;
