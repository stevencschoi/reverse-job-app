import React from 'react';
import { DataContext } from '../context/DataContext';
import { GetBaseURL } from '../../utilities';

export const useAppData = () => {
  const { data, setData } = React.useContext(DataContext);

  const handleInput = (e) => {
    e.persist();
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login = (user) => {
    fetch(`${GetBaseURL()}/api/login`, {
      method: 'POST',
      body: user,
    });
    // set jwt to localstorage or cookie;
  };

  return { data, handleInput, login };
};
