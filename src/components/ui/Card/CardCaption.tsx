import classNames from "classnames";
import React, { ReactNode, forwardRef } from "react";

export const CardCaption = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string }
>((props, ref) => {
  const { children, className } = props;

  const classess = classNames(
    className,

    "text-sm md:text-base lg:text-lg font-normal text-black-400"
  );
  return (
    <p ref={ref} className={`${classess}`}>
      {children}
    </p>
  );
});

CardCaption.displayName = "CardCaption";
