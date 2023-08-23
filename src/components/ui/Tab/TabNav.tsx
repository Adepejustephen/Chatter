import React, { ReactNode, forwardRef } from "react";
import classNames from "classnames";
import { useTabs } from "./context";
import useCallbackRef from "../utils/hooks/useCallbackRef";
interface Props {
  value?: string;
  children: ReactNode;
    className?: string;
    icon?: ReactNode;
    disabled?: boolean
}

const TabNav = forwardRef<HTMLDivElement,Props>((props, ref) => {
  const {
    value: valueProp,
    disabled,
    className,
    icon,
    children,
    ...rest
  } = props;

  const { value, onValueChange, variant } = useTabs();
  const isSelected = valueProp === value;


  const onTabNavClick = useCallbackRef(() => {
      if (!isSelected && !disabled) {
        // @ts-ignore
      onValueChange(valueProp);
    }
  });



  // console.log(themeColor, color)

  const tabNavClass = classNames(
    "tab-nav text-secondary",
    `tab-nav-${variant}`,
    isSelected && `tab-nav-active `,
    isSelected &&
      variant === "underline" &&
      `border-primary border-b-2 text-secondary`,
    isSelected && variant === "pill" && `bg-primary dark:text-gray-100`,
    disabled && "tab-nav-disabled",
    !disabled && !isSelected && `hover:text-primary `,
    className
  );

  return (
    <div
      className={tabNavClass}
      role="tab"
      aria-selected={isSelected}
      ref={ref}
      onClick={onTabNavClick}
      {...rest}
    >
      {icon && <div className="tab-nav-icon">{icon}</div>}
      {children}
    </div>
  );
});

TabNav.displayName="Tab Nav"

// TabNav.propTypes = {
//   disabled: PropTypes.bool,
//   value: PropTypes.string.isRequired,
//   icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
// };

export default TabNav;
