import { AvatarProps } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import React, { forwardRef } from "react";

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { className, src, size } = props;

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
        alt="Avatar"
        src={src}
        fill={true}
        className="object-cover rounded-full  w-full"
      />
    </div>
  );
});

Avatar.displayName = "Avatar";

Avatar.defaultProps = {
  size: 32,
};
