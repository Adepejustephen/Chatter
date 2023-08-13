import { InputProps } from "@/types";
import classNames from "classnames";
import { forwardRef } from "react";

// const regInputType =    "text" || "email" || "password" || "number" || "tel";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type, placeholder, suffix, prefix ,className} = props;
  const prefixClass = prefix?"pl-10":""
  const suffixClass = suffix?"pr-12":""

  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
        {prefix}
      </div>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={classNames(
          prefixClass,
          suffixClass,
          className,
          "w-full border-gray-300 border p-3 outline-0 focus:border-primary hover:border-primary rounded-lg text-secondary shadow text-sm md:text-base placeholder:text-secondary"
        )}
      />
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
        {suffix}
      </div>
    </div>
  );
});

Input.displayName = "Input";
