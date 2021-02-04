import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

import { useAppData } from './hooks/useAppData';

const OfferStart = () => {
  const { data, handleInput, login } = useAppData();

  return (
    <main>
      <div className="wrapper">
        <nav>
          <Link to="/">
            <i className="fas fa-chevron-left"></i> Back
          </Link>
        </nav>
        <h2>Enter your email</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputLabel htmlFor="user">Email address</InputLabel>
          <Input name="user" id="user" onChange={(e) => handleInput(e)} />
          <button type="submit" onClick={() => login(data.user)}>
            Next
          </button>
        </form>
      </div>
    </main>
  );
};

export default OfferStart;
