import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../../assets/images/Sentimentalists Logo.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css';

const useStyles = makeStyles({
  mainLogo: {
    display: 'block',
    width: '100%',
    height: 'auto',
    padding: '10px',
  },
  mainHeading: {
    fontSize: '30px',
  }
})


function Header() { 
const classes = useStyles();

  return (
    <Grid container justify="center">
    <Grid item xs={8} sm={6} md={4}>
    <img src={Logo} alt="The Sentimentalists Logo" className={classes.mainLogo}/>
    <Grid item>
      <Typography variant="h1"className={classes.mainHeading}>Analysing Media Sentiment Since 2020</Typography>
    </Grid>
    </Grid>
    </Grid>
  );
}

export default Header;
