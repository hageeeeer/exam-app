import React, { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
});

export default function RegisterPage() {
  const [loginError, setloginError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  async function submitForm(values) {
    console.log(values);
    try {
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        {/* Left: Image */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Create Account</h1>
          <Form
            onSubmit={handleSubmit(submitForm)}
            className="flex w-96 flex-col gap-4"
            render={(props) => <form {...props} data-custom="foo" />}
          >
            <TextField name="email" type="email">
              <Label>Email</Label>
              <Input
                {...register("email")}
                placeholder="john@example.com"
                className="rounded-sm my-1 pr-10 w-full"
              />
              {errors?.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}{" "}
            </TextField>

            <div className="">
              <Button className="w-full" type="submit">
                <Link to="/verifycode"> Next </Link>
              </Button>
            </div>
          </Form>
          {/* Sign up  Link */}
          <span className="mt-5 block text-gray-800 text-sm">
            Already Have an Account?
            <Link to="/" className=" text-blue-500 hover:underline">
              {" "}
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
