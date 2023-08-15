"use client";

import React, { useState } from "react";
import EyeLashesIcon from "public/svgs/Eyelashes.svg";
import EyeIcon from "public/svgs/Eye.svg";
import GoogleIcon from "public/svgs/googleIcon.svg";
import {
  Button,
  FormContainer,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "../ui";
import * as yup from "yup";
import { SignUpchema } from "@/utils/validations/SignUp";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = yup.InferType<typeof SignUpchema>;

export const LoginForm = () => {
  const [showPwd, setShowPwd] = useState(false);

  const form = useForm<FormData>({
    resolver: yupResolver(SignUpchema),
  });

  const pwdIcon = (
    <div
      className="z-10 cursor-pointer"
      onClick={() => {
        setShowPwd(!showPwd);
      }}
    >
      {showPwd ? <EyeLashesIcon /> : <EyeIcon />}
    </div>
  );

  return (
    <FormContainer {...form}>
      <form className="flex flex-col gap-6 w-full">
       
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Johndoe@gmail.com "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  suffix={pwdIcon}
                  type={showPwd ? "text" : "password"}
                  placeholder="**********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
     
        <Button className="flex items-center justify-center">
         Log in
        </Button>
        <Button
          variant="outlined"
          size="lg"
          className="flex items-center justify-center gap-3  !border-[#D0D0D0]"
        >
          <GoogleIcon />Login up with Google
        </Button>
      </form>
    </FormContainer>
  );
};
