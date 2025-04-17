import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <SidebarContext.Provider value={{ isSidebarHovered, setIsSidebarHovered }}>
      {children}
    </SidebarContext.Provider>
  );
};