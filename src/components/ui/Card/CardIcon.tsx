import classNames from "classnames";
import React, { ReactNode, forwardRef } from "react";

export const CardIcon = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string }
>((props, ref) => {
  const { children, className } = props;

  const classess = classNames(
    className,

    ""
  );
  return (
    <div ref={ref} className={`${classess}`}>
      {children}
    </div>
  );
});

CardIcon.displayName = "CardIcon";
