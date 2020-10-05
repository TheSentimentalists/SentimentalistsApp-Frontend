import React, { useState } from "react"; 
import Grid from "@material-ui/core/Grid";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
/*error toggle needs implementing*/

function URLInput() {

  const [text, setText]

  const handleTextChange = event => {
    setText(event.target.value)
  }
  
  const handleAnalyseClick = () => {
    addURL(text);
    setText("");
  }
  
  
return (
<div>
      <Grid container direction="column" style={{ border: "1px solid red" }}>
        <form>
          <Grid item xs={12}>
            <Textfield
              fullWidth
              required
              variant="outlined"
              label="Input URL"
              onChange={ handleTextChange }
              value = { text }
            ></Textfield>
          </Grid>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick ={ handleAnalyseClick }
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
