import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

const OfferStart = () => {
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
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input name="email" id="email" />
          <Button type="submit">Next</Button>
        </FormControl>
      </div>
    </main>
  );
};

export default OfferStart;
