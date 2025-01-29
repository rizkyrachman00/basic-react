import { useParams } from "react-router";

const ProductDetailPage = () => {
  const params = useParams<{ slug: string }>();

  return (
    <>
      <h1>Ini halaman Detail Produk</h1>
      <h1>{params.slug}</h1>
    </>
  );
};

export default ProductDetailPage;
