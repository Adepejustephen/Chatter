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

export const SignUpForm = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [showVerifyPwd, setShowVerifyPwd] = useState(false);
  const form = useForm<FormData>({
    resolver: yupResolver(SignUpchema),
  }); 
   

  const pwdIcon =  <div
      className="z-10 cursor-pointer"
      onClick={() => {
        setShowPwd(!showPwd);
        
      }}
    >
      {showPwd ? <EyeLashesIcon /> : <EyeIcon />}
    </div>
  const verifyIcon =  <div
      className="z-10 cursor-pointer"
      onClick={() => {
        setShowVerifyPwd(!showVerifyPwd);
      
      }}
    >
      {showVerifyPwd ? <EyeLashesIcon /> : <EyeIcon />}
    </div>
  
  return (
    <FormContainer {...form}>
      <form className="flex flex-col gap-6 w-full">
        <div className="flex gap-6 md:gap-4 flex-col md:flex-row w-full">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>You are joining as?</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Writer "
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
        <FormField
          control={form.control}
          name="verifyPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  suffix={verifyIcon}
                  type={showVerifyPwd ? "text" : "password"}
                  placeholder="**********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="flex items-center justify-center">
          Create account
        </Button>
        <Button
          variant="outlined"
          size="lg"
          className="flex items-center justify-center gap-3  !border-[#D0D0D0]"
        >
         <GoogleIcon/> Sign up with Google
        </Button>
      </form>
    </FormContainer>
  );
};
