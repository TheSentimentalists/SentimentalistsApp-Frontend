import React from "react";
import Grid from "@material-ui/core/Grid";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
/*error toggle needs implementing*/

function URLInput() {
  return (
    <div>
      <Grid style={{ border: "1px solid red" }}>
        <form>
          <Textfield required variant="outlined" label="Input URL"></Textfield>
          <Button
            size="large"
            variant="contained"
            color="primary"
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
