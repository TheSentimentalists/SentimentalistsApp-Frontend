import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import "./URLinput.css";
import URLInputHeader from "./URLInputHeader";
import Tooltip from "@material-ui/core/Tooltip";
import HelpIcon from "@material-ui/icons/Help";

const useStyles = makeStyles(() => ({
  inputURLArea: {
    paddingTop: "25px",
    paddingBottom: "85px",
  },

  inputBox: {
    textAlign: "center",
    marginBottom: "30px",
    fontFamily: "Graduate, sans-serif",
  },

  inputButton: {
    background: "#6bb26d",
    borderRadius: 0,
    fontFamily: "Graduate,",
    fontSize: "20px",
  },

  infoText: {
    fontSize: "16px",
  },

  info: {
    color: "#6bb26d",
    fontSize: "25px",
    cursor: "pointer"
  },
}));

function URLInput(props) {
  const [text, setText] = useState("");
  const classes = useStyles();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    props.setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: text }),
    };

    fetch(
      "https://1rrk3o1dq0.execute-api.eu-west-2.amazonaws.com/prod/analysis",
      requestOptions
    )
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        props.setRequest(data);
        props.setLoading(false);
      })
      .catch((error) => {
        props.setLoading(false);
        console.error("There was an error!", error);
      });
  };

  return (
    <div>
      <URLInputHeader />
      <Grid
        container
        direction="column"
        justify="center"
        align="center"
        className={classes.inputURLArea}
      >
        <form>
          <Grid item xs={10} sm={8} md={6} lg={3}>
            <Grid
              container
              direction="row"
              justify="space-between"
              align="center"
            >
              <Grid item xs={11}>
                <Textfield
                  className={classes.inputBox}
                  fullWidth
                  required
                  label="Input URL"
                  variant="outlined"
                  value={text}
                  onChange={handleTextChange}
                  color="secondary"
                  error
                  id="standard-error"
                ></Textfield>
              </Grid>
              <Grid item>
                <Tooltip
                  arrow
                  placement="bottom"
                  title={
                    <p style={{ fontSize: "16px " }}>
                      Have you ever wondered if you can trust what you read in
                      the news?
                      <br />
                      Are you ever baffled by bias and puzzled by politics?
                      <br />
                      The Sentimentalists App is designed to help you make
                      informed judgments/decisions/conclusions about the news
                      content you consume online.
                      <br />
                      To find out if what you’ve been reading is a worthwhile
                      source, just enter a URL and click Analyse.
                    </p>
                  }
                >
                  <HelpIcon className={classes.info} />
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Button
            style={{ fontFamily: "Graduate" }}
            className={classes.inputButton}
            size="large"
            variant="contained"
            onClick={handleSubmit}
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
