import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const registerSchema = z.object({
  name: z.string().min(3, { message: "Minimal 3 karater" }),
  email: z.string().email({ message: "Format email harus benar" }),
  password: z
    .string()
    .min(8, { message: "Minimal 8 karakter" })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Minimal 1 karakter Uppercase",
    })
    .refine((value) => /\d/.test(value), { message: "Minimal 1 number" }),
  age: z.coerce.number().min(18),
});

type RegisterFormSchema = z.infer<typeof registerSchema>;

const TaskRHFPage = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
  });

  const handleFormSubmit = (values: RegisterFormSchema) => {
    alert("Form Telah Berhasil Submit");
    console.log(values);

    form.setValue("name", "");
  };

  return (
    <div>
      <h1>Form Task Page React-Hook-Form & Zod</h1>

      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <label>
          Name :
          <input type="text" {...form.register("name")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.name?.message}
        </span>

        <label>
          Email :
          <input type="email" {...form.register("email")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.email?.message}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskRHFPage;
