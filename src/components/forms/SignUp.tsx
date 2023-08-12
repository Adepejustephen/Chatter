import React from 'react'
import { Input } from '../ui';

export const SignUp = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <h2 className=" text-2xl md:text-[32px] font-medium leading-[48px]">
        Register as a Writer/Reader
      </h2>
      <Input
        type="email"
        placeholder="Enter email"
     
      />
    </div>
  );
}
