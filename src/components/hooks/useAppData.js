import React from 'react';
import { DataContext } from '../context/DataContext';
import { GetBaseURL } from '../../utilities';
import axios from 'axios';

export const useAppData = () => {
  const { data, setData } = React.useContext(DataContext);

  const handleInput = (e) => {
    e.persist();
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login = (email) => {
    const url = `${GetBaseURL()}/api/login`;
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify({ email }),
    // };

    // const request = await fetch(url, options);

    // if (request.status === 200) {
    //   // set jwt to localstorage or cookie;
    //   let response = await request.json();
    //   console.log('response', response);
    //   return true;
    // } else {
    //   console.log('what happen');
    //   return false;
    // }
    axios
      .post(url, { email })
      .then((response) => console.log('token:', response.data.token, 'email:', response.data.email));
  };

  return { data, handleInput, login };
};
