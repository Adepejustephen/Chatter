
import classNames from "classnames";
import { forwardRef } from "react";
import { SIZES } from "../utils/constant";
import { ButtonProps } from "@/types";
// import { ButtonProps } from "@/types";

// import { ButtonProps } from "./types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      variant,
      // color,
      type,
      disabled,
      className,
      size,
      // loading,
    } = props;

    const getSizeClass = () => {
      let sizeClass = "";

      switch (size) {
        case SIZES.XS:
          sizeClass = "p-1 ";
          break;
        case SIZES.SM:
          sizeClass = "py-2 px-3 ";
          break;

        case SIZES.MD:
          sizeClass = "py-2 px-4";
          break;

        case SIZES.LG:
          sizeClass = "py-2 px-8";
          break;
        default:
          break;
      }
      return sizeClass;
    };

    const variantClasses = () => {
      let variantClass = "";
      switch (variant) {
        case "contained":
          variantClass = `bg-primary border-0 text-white ${
            disabled && "opacity-50"
          }`;
          break;
        case "outlined":
          variantClass = `border border-primary bg-0 text-secondary `;
          break;
        case "text":
          variantClass = `bg-0 text-secondary`;
          break;

        default:
          break;
      }
      return variantClass;
    };

    const classes = classNames(
      variantClasses(),
      getSizeClass(),
      className,
      `outline-0 rounded-lg  ${!disabled && "cursor-pointer"}`
    );
    const renderChildren = () => {
      return <>{children}</>;
    };

    return (
      <button {...props} ref={ref} type={type} className={classes}>
        {renderChildren()}
      </button>
    );
  }
);

Button.defaultProps = {
  size: "md",
  variant: "contained",
  type: "button",
  // loading: false,
};

Button.displayName="BUtton"