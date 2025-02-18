import { useForm } from "react-hook-form";

type RegisterFormSchema = {
  username: string;
  password: string;
};

const RHFPage = () => {
  
  // merupakan schema dari react hook form agar muncul suggestion
  // const form = useForm<{
  //   username: string;
  //   password: string;
  // }>();  

  const form = useForm<RegisterFormSchema>();

  // const handleRegisterUser = (values: {
  //   username: string;
  //   password: string;
  // }) => {
  //   alert("Form Submited");
  //   console.log(values);
  //   // form.watch("")
  //   form.setValue("username", "");
  // };

  const handleRegisterUser = (values: RegisterFormSchema) => {
    alert("Form Submited");
    console.log(values);
    // form.watch("")
    form.setValue("username", "");
  };

  return (
    <div>
      <h1>React Hook Form Page</h1>

      <form
        action=""
        onSubmit={form.handleSubmit(handleRegisterUser)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <label>
          Username :
          <input type="text" {...form.register("username")} />
        </label>

        <label>
          Password :
          <input type="password" {...form.register("password")} />
        </label>

        <button type="submit" style={{ width: "fit-content" }}>
          Register User
        </button>
      </form>
    </div>
  );
};

export default RHFPage;
