import React from 'react';
import Textfield  from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';
/*error toggle needs implementing*/


function URLInput() {
  return (
  <form>
    <Textfield required variant="outlined" label="Input URL"></Textfield>
    <Button>Analyse</Button>
  </form>  
  )
}

export default URLInput;
