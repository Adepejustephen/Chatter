import { createContext, useContext } from 'react'

interface ContextProps {
  value?: string;
  onChange?: () => void;
  onValueChange?: (prop:any) => {};
  variant?: "underline" | "pill";
}

const TabsContext = createContext<ContextProps>({
  value: "",
//   defaultValue: "",
    // onValueChange: () => null,
   variant: "underline",
});

export const TabsContextProvider = TabsContext.Provider

export const TabsContextConsumer = TabsContext.Consumer

export function useTabs() {
    return useContext(TabsContext)
}

export default TabsContext;