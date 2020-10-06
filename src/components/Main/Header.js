import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../../assets/images/Sentimentalists Logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainLogo: {
    display: 'block',
    width: '100%',
    height: 'auto',
  }
})


function Header() {
const classes = useStyles();

  return (
    <Grid container justify="center">
    <Grid item xs={8}>
    <img src={Logo} alt="The Sentimentalists Logo" className={classes.mainLogo}/>
    </Grid>
    </Grid>
  );
}

export default Header;
