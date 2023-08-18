import { AvaterProps } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import React, { forwardRef } from "react";

export const Avater = forwardRef<HTMLDivElement, AvaterProps>((props, ref) => {
  const { className, src, size,  } = props;

  const classess = classNames(
    className,
    ` rounded-full shadow cursor-pointer ]`
  );
  return (
    <div
    {...props}
      className={`${classess} relative`}
      ref={ref}
      style={{ height: size, width: size }}
    >
      <Image
        alt="avater"
        src={src}
        fill={true}
        className="object-cover rounded-full  w-full"
      />
    </div>
  );
});

Avater.displayName = "Avater";

Avater.defaultProps = {
    size: 32
}