import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// type RegisterFormSchema = {
//   username: string;
//   password: string;
// };

const registerFormSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Minimal 3 karakter" })
      .max(10, { message: "Maksimal 10 karakter" }),
    password: z.string().min(8, { message: "Minimal 8 karakter" }),
    repeatPassword: z.string(),
    age: z.coerce.number().min(18),
    gender: z.enum(["male", "female"]),
    isPregnant: z.boolean().optional(),
    dob: z.coerce.date().min(new Date()).optional(),
  })
  .superRefine((arg, ctx) => {
    if (arg.password !== arg.repeatPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["repeatPassword"],
        message: "Password tidak sama",
      });
    }
  });

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

const RHFPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          <input
            type={showPassword ? "text" : "password"}
            {...form.register("password")}
          />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.password?.message}
        </span>

        <label>
          Repeat Password :
          <input
            type={showPassword ? "text" : "password"}
            {...form.register("repeatPassword")}
          />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.repeatPassword?.message}
        </span>

        <label>
          <input
            type="checkbox"
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          Show Password
        </label>

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

        <label>
          Gender :
          <select {...form.register("gender")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.gender?.message}
        </span>

        {form.watch("gender") === "female" && (
          <label>
            is Pregnant :
            <input type="checkbox" {...form.register("isPregnant")} />
          </label>
        )}

        <button type="submit" style={{ width: "fit-content" }}>
          Register User
        </button>
      </form>
    </div>
  );
};

export default RHFPage;
