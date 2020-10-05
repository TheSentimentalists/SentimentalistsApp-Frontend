import React from 'react';
import Textfield  from '@material-ui/core/Textfield'
/*error toggle needs implementing*/


function URLInput() {
  return (
  <form>
    <Textfield required variant="outlined" label="Input URL"></Textfield>
  </form>  
  )
}

export default URLInput;
