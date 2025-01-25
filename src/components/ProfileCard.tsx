type ProfileType = {
  nama?: string;
  birth: number;
  job?: string;
  id: number;
};

const ProfileCard = (props: ProfileType) => {
  // const nama = "rizky";
  // const birth = "juni 2000";
  // const job = "programmer";

  const { nama = "tidak dikenali", birth, job } = props;

  return (
    <>
      <div className="card">
        <p>Name : {nama}</p>
        <p>Birth : {birth}</p>
        {/* {job ? <p>Job : {job}</p> : null} */ job && <p>Job : {job}</p>}
      </div>
    </>
  );
};

export default ProfileCard;
