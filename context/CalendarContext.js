import React, { createContext, useState } from "react";

export const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [data, setData] = useState({});
  console.log("data::", data);

  return (
    <CalendarContext.Provider value={{ data, setData }}>
      {children}
    </CalendarContext.Provider>
  );
};
