import { useSearchParams } from "react-router";

const ListProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.get("sort"));

  const handleSortParams = (sortValue: string) => {
    searchParams.set("sort", sortValue);

    setSearchParams(searchParams);
  };

  return (
    <>
      <h1>Ini halaman list product</h1>
      <p>{searchParams.get("sort")}</p>
      <p>{searchParams.get("price")}</p>

      <button onClick={() => handleSortParams("asc-price")}>Sort Asc</button>
      <button onClick={() => handleSortParams("desc-price")}>Sort Desc</button>
    </>
  );
};

export default ListProductPage;
