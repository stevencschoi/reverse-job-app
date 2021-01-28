import React, { useState } from 'react';

const DataContext = React.createContext({});

const DataContextProvider = (props) => {
  const [data, setData] = useState({
    user: '',
    formData: {},
  });
  const providerValue = { data, setData };
  return <DataContext.Provider value={providerValue}>{props.children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
