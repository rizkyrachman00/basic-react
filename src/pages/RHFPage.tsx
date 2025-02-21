import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// type RegisterFormSchema = {
//   username: string;
//   password: string;
// };

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Minimal 3 karakter" })
    .max(10, { message: "Maksimal 10 karakter" }),
  password: z.string().min(8, { message: "Minimal 8 karakter" }),
  age: z.coerce.number().min(18),
  dob: z.coerce.date().optional(),
});

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

const RHFPage = () => {
  // merupakan schema dari react hook form agar muncul suggestion
  // const form = useForm<{
  //   username: string;
  //   password: string;
  // }>();

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

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
        <span style={{ color: "red" }}>
          {form.formState.errors.username?.message}
        </span>

        <label>
          Password :
          <input type="password" {...form.register("password")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.password?.message}
        </span>

        <label>
          Age :
          <input type="number" {...form.register("age")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.age?.message}
        </span>

        <label>
          Date of birth :
          <input type="date" {...form.register("dob")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.dob?.message}
        </span>

        <button type="submit" style={{ width: "fit-content" }}>
          Register User
        </button>
      </form>
    </div>
  );
};

export default RHFPage;
