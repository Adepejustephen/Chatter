import React, { ReactNode, forwardRef } from "react";
import classNames from "classnames";
import { useTabs } from "./context";

interface Props {
    value?: string;
    children: ReactNode;
    className?: string;
}
const TabContent = forwardRef<HTMLDivElement,Props>((props, ref) => {
  const { value, children, className, ...rest } = props;

  const context = useTabs();
  const isSelected = value === context.value;

  const tabContentClass = classNames(
    "tab-content",
    isSelected && "tab-content-active",
    className
  );

  return (
    <div
      role="tabpanel"
      tabIndex={0}
      className={tabContentClass}
      ref={ref}
      {...rest}
    >
      {isSelected && children}
    </div>
  );
});

TabContent.displayName="TabContent";

export default TabContent;
