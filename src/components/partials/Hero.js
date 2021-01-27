import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Hero = ({ title, desc, main, background }) => {
  const useStyles = makeStyles({
    submit: {
      background: '#e63946',
      color: '#f1faee',
      fontSize: '1.6rem',
      fontWeight: '500',
      width: '180px',
      height: '50px',
      marginTop: '2rem',
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
          <Link to="/offer">Submit An Offer</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
