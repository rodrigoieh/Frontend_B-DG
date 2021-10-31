import React, { useState } from "react";
export const dataCentral = React.createContext();

const DatagenContext = ( props ) => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <dataCentral.Provider
      value={{
        activeLink,
        setActiveLink,
      }}
    >
      {props.children}
    </dataCentral.Provider>
  );
};

export default DatagenContext;
