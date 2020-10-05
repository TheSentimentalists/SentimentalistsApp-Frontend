import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core';
import './URLinput.css';
/* resolve CSS */
 /*error toggle needs implementing*/


 const useStyles = makeStyles(() => ({
      inputURLArea : {
        border: '3px solid red',
        paddingTop: '25px',
        paddingBottom: '55px'
      },

      inputBox : {
        border: '5px solid #bba5ac',
        textAlign: 'center',
        marginBottom: '30px',
        fontFamily: 'Graduate, sans-serif',
      },

      inputButton : {
        background: '#6bb26d',
        borderRadius: 0,
        fontFamily: 'Graduate,'
      },
    }))

function URLInput(props) {
const [text, setText] = useState("");
const classes = useStyles();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    props.getURL(text);
  };

  return (
    <div>
      <Grid container direction="column" justify="center" align="center"
      className={classes.inputURLArea}>
        <form>
          <Grid item xs={10} sm={8} md={6} lg={4}> 
            <Textfield className={classes.inputBox}
              fullWidth
              required
              label="Input URL"
              variant="outlined"
              value={text}
              onChange={handleTextChange}
            ></Textfield>
          </Grid>
          <Button style={{fontFamily: "Graduate"}} className={classes.inputButton}
            size="large"
            variant="contained"
            
            onClick={handleClick}
            disableElevation
          >
            Analyse
          </Button>
        </form>
      </Grid>
    </div>
  );
}

export default URLInput;
