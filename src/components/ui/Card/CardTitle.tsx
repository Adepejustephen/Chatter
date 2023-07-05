
import classNames from "classnames";
import React, { ReactNode, forwardRef } from "react";

export const CardTitle = forwardRef<HTMLDivElement, {children:ReactNode, className?: string}>((props, ref) => {
  const { children, className } = props;
 
  const classess = classNames(
    className,
    
    "text-base md:text-xl lg:text-2xl font-medium"
  );
  return (
    <h4 ref={ref} className={`${classess}`}>
      {children}
    </h4>
  );
});

CardTitle.displayName = "CardTitle";

