// " use client"

import { LoginForm } from '@/components/forms/LoginForm';
import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col gap-10 items-center w-full">
      <h2 className=" text-2xl md:text-[32px] font-medium leading-[48px]">
        Welcome back
      </h2>
      <LoginForm />
      {/* <Input placeholder="Johndoe@gmail.com" type="email" /> */}
    </div>
  );
}

export default Login