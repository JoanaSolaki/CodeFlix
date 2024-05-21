"use client";

import { createContext, useState } from "react";
export const AppContext = createContext();
export default function AppContextProvider({ children }) {

  const [search, setSearch] = useState();

  const contextValues = {
    search,
    setSearch
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
}
