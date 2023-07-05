import { CardProps } from "@/types";
import classNames from "classnames";
import React, { forwardRef } from "react";

export const Card = forwardRef<HTMLDivElement, CardProps>(
    (props, ref) => {
        const { children, className, elevation } = props
        const getElevation = () => {
            let elevationClass;
            switch (elevation) {
                case 1:
                 elevationClass = "border shadow";   
                    break;
                case 2:
                elevationClass = " shadow-sm";   
                    break;
                case 3:
                elevationClass = " shadow-md";   
                    break;
                case 4:
                elevationClass = " shadow-lg";   
                    break;
                case 5:
                elevationClass = " shadow-xl";   
                    break;
            
                default:
                    break;
            }
            return elevationClass
        }
    const classess = classNames(
        className,
        getElevation(),
      "rounded-lg flex flex-col gap-3 p-4 w-full h-full"
    );
    return <div ref={ref} className={`${classess}`}>{children}</div>;
  }
);

Card.displayName = "Card";
Card.defaultProps ={
    elevation: 1,
}