import React from 'react';
import { TextField, Button, Grid, Container } from '@material-ui/core'
/*error toggle needs implementing*/


function URLInput() {
  return (
  <form>
    <TextField required variant="outlined" label="Input URL"></TextField>
    
  </form>  
  )
}

export default URLInput;
