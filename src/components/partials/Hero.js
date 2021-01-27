import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Hero = ({ title, desc, main, background }) => {
  const useStyles = makeStyles({
    submit: {
      color: '#f1faee',
      fontSize: '1.6rem',
      background: '#e63946',
      width: '175px',
      '&:hover, &:focus': {
        backgroundColor: '#B22526',
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={`hero ${background}`}>
      <div className="hero-text">
        {main ? <h1>{title}</h1> : <h2>{title}</h2>}
        <p>{desc}</p>
        <Button variant="contained" className={classes.submit} onClick={() => console.log('click')}>
          Submit An Offer
        </Button>
      </div>
    </div>
  );
};

export default Hero;
