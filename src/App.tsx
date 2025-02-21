import Welcome from "./components/Welcome.tsx";
import HeaderCustom from "./components/HeaderCustom.tsx";
import ProfileCard from "./components/ProfileCard.tsx";
import Counter from "./components/Counter.tsx";
import LikeButton from "./components/LikeButton.tsx";
import { Routes, Route } from "react-router";

import "./App.css";
import HomePage from "./pages/HomePage.tsx";
import TermPage from "./pages/TermPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import ListProductPage from "./pages/ListProductPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import FormPage from "./pages/FormPage.tsx";
import RHFPage from "./pages/RHFPage.tsx";
import TaskRHFPage from "./pages/TaskRHFPage.tsx";

type Lecturer = {
  nama?: string;
  birth: number;
  job?: string;
  id: number;
};

const teachers: Lecturer[] = [
  {
    id: 1,
    nama: "Eko",
    birth: 2000,
    job: "Petani",
  },
  {
    id: 2,
    nama: "Rudi",
    birth: 1909,
  },
  {
    id: 3,
    nama: "Rizky",
    birth: 2000,
    job: "Programmer",
  },
  {
    id: 4,
    birth: 1980,
  },
];

function App() {
  return (
    <>
      <HeaderCustom />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/terms" element={<TermPage />} />

        <Route path="/list-product-page" element={<ListProductPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />

        <Route path="/form" element={<FormPage />} />
        <Route path="/rhf" element={<RHFPage />} />

        <Route path="/task-rhf" element={<TaskRHFPage />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>

    // <div style={{ padding: "16px 32px" }}>
    //   <HeaderCustom />

    //   <Welcome />
    //   <Counter />
    //   <LikeButton />

    //   {/* {
    //     // [
    //     //   <ProfileCard nama="rizky" birth="Juni 2000" job="Progammer" />,
    //     //   <ProfileCard />,
    //     //   <ProfileCard />,
    //     //   <ProfileCard />,
    //     // ]
    //     teachers.map((teacher) => {
    //       return (
    //         <ProfileCard
    //           nama={teacher.nama}
    //           birth={teacher.birth}
    //           job={teacher.job}
    //           id={teacher.id}
    //         />
    //       );
    //     })
    //   } */}
    // </div>

    //  routing react
  );
}

export default App;
