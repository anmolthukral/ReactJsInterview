import React, { useState } from "react";
export const EmployeeContext = React.createContext();

export const Context = ({ children }) => {
  const [employee, setEmployee] = useState([]);
  return (
    <EmployeeContext.Provider value={{ employee, setEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default Context;
