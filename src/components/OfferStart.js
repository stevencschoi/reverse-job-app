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
        <FormControl>
          <InputLabel htmlFor="user">Email address</InputLabel>
          <Input name="user" id="user" onChange={(e) => handleInput(e)} />
          <Button type="submit">Next</Button>
        </FormControl>
      </div>
    </main>
  );
};

export default OfferStart;
