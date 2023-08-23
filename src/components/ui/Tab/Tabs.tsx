import React, { ReactNode, forwardRef } from "react";
import { TabsContextProvider } from "./context";
import useControllableState from "../utils/hooks/useControllableState";
import classNames from "classnames";

interface Props {
  value?: string;
  children: ReactNode;
  className?: string;
  onChange?: () => void;
  defaultValue?: string;
  variant?: "underline"| "pill";
}

const Tabs = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    value: valueProp,
    onChange,
    defaultValue,
    variant,
    className,
    ...rest
  } = props;

  const [value, setValue] = useControllableState({
    prop: valueProp,
    onChange: onChange,
    defaultProp: defaultValue,
  });

  const tabsClass = classNames("tabs", className);

  return (
    <TabsContextProvider
      value={{
        value: value,
        onValueChange: setValue,
        variant,
      }}
    >
      <div className={tabsClass} {...rest} ref={ref} />
    </TabsContextProvider>
  );
});

Tabs.defaultProps = {
  variant: "underline",
};
Tabs.displayName = "Tabs"

// Tabs.propTypes = {
//   variant: PropTypes.oneOf(["underline", "pill"]),
//   defaultValue: PropTypes.string,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };

export default Tabs;
