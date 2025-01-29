import Welcome from "./components/Welcome.tsx";
import HeaderCustom from "./components/HeaderCustom.tsx";
import ProfileCard from "./components/ProfileCard.tsx";
import Counter from "./components/Counter.tsx";
import LikeButton from "./components/LikeButton.tsx";

import "./App.css";

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
    <div style={{ padding: "16px 32px" }}>
      <HeaderCustom />

      <Welcome />
      <Counter />
      <LikeButton />

      {/* {
        // [
        //   <ProfileCard nama="rizky" birth="Juni 2000" job="Progammer" />,
        //   <ProfileCard />,
        //   <ProfileCard />,
        //   <ProfileCard />,
        // ]
        teachers.map((teacher) => {
          return (
            <ProfileCard
              nama={teacher.nama}
              birth={teacher.birth}
              job={teacher.job}
              id={teacher.id}
            />
          );
        })
      } */}
    </div>
  );
}

export default App;
