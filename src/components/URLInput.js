import React from 'react';
import Textfield  from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';
/*error toggle needs implementing*/


function URLInput() {
  return (
    <div style={{border: "1px solid red"}}>
  <form>
    <Textfield required variant="outlined" label="Input URL"></Textfield>
    <Button variant="contained" color="primary" disableElevation>Analyse</Button>
  </form>  
  </div>
  )
}

export default URLInput;
