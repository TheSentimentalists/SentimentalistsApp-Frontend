import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core';


const useStyles = makeStyles({
    aBorderStyle : {
        border: '3px solid red'
    }
});

export default function Hook(){
    const classes = useStyles();
    return <Button className={classes.aBorderStyle}>Boobs</Button>
}