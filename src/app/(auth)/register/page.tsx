
import { SignUpForm } from '@/components/forms/SignUpForm';
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <h2 className=" text-2xl md:text-[32px] font-medium leading-[48px]">
        Register as a Writer/Reader
      </h2>
      <SignUpForm />
    </div>
  );
}

export default page