import React, { ReactNode, forwardRef } from "react";
import classNames from "classnames";
import { useTabs } from "./context";
interface Props {
  value?: string;
  children: ReactNode;
  className?: string;
}
const TabList = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, ...rest } = props;

  const { variant } = useTabs();

  const tabListClass = classNames("tab-list", `tab-list-${variant}`, className);

  return (
    <div role="tablist" className={tabListClass} ref={ref} {...rest}>
      {children}
    </div>
  );
});

TabList.displayName ='TabList'

export default TabList;
