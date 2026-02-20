import { createContext, useContext, useState } from "react";

/* ---------- Context ---------- */
const RoleContext = createContext(null);

/* ---------- Provider ---------- */
export function RoleProvider({ children }) {
  const [role, setRole] = useState(null);

  const logout = () => {
    setRole(null);
  };

  return (
    <RoleContext.Provider value={{ role, setRole, logout }}>
      {children}
    </RoleContext.Provider>
  );
}

/* ---------- Hook ---------- */
export function useRole() {
  const context = useContext(RoleContext);

  if (!context) {
    throw new Error("useRole must be used inside RoleProvider");
  }

  return context;
}
