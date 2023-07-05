import { TypographyProps } from "../../../types";
import React, { forwardRef } from "react";

const Typography = forwardRef<HTMLButtonElement, TypographyProps<any>>(
  (props, ref) => {
    return <div>Typography</div>;
  }
);

Typography.displayName="typography"

export default Typography;
