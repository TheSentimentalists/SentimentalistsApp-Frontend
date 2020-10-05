import React, { useState } from "react"; 
import Grid from "@material-ui/core/Grid";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
/*error toggle needs implementing*/

function URLInput(props) {
const [text, setText] = useState("");

const handleTextChange = (event) => {
  setText(event.target.value);
}


const handleClick = () => {
  props.getURL(text);
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
              value = { text }
              onChange={ handleTextChange }
            ></Textfield>
          </Grid>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={ handleClick }
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
