"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Button, Input } from "@/components";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Email is required."),
  password: Yup.string().required("Password is required."),
});

const defaultValues = {
  email: "",
  password: "",
};

type LoginFormProps = {
  logInUser: (payload: {
    email: string;
    password: string;
  }) => Promise<{ ok: boolean; message: string }>;
};
export const LoginForm = ({ logInUser }: LoginFormProps) => {
  const router = useRouter();

  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          const response = await logInUser(data);

          if (!response.ok) throw response?.message;

          router.replace("/");
        } catch (error) {
          console.log(error);
        }
      })}
    >
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              label="Email"
              id="email"
              placeholder="Enter email"
              {...field}
            />
            {error && (
              <small className="text-red-500 text-xs">{error?.message}</small>
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              label="Password"
              type="password"
              id="password"
              placeholder="Enter password"
              {...field}
            />
            {error && (
              <small className="text-red-500 text-xs">{error?.message}</small>
            )}
          </>
        )}
      />
      <Button type="submit" className="mt-4 w-full">
        Login
      </Button>
    </form>
  );
};
