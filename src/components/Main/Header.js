import React from 'react';
import Logo from '../../assets/images/Sentimentalists Logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainLogo: {
    display: 'block',
    margin: 'auto',
  }
})

function Header() {
const classes = useStyles();

  return (
    
    <img src={Logo} alt="The Sentimentalists Logo" className={classes.mainLogo}/>
  );
}

export default Header;
