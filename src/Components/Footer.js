import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
    footer:{
        backgroundColor:"#FE3F01",
        padding:"30px 0px",
        textAlign:"center",
        color:"#FFF"
    }
})
const date=new Date();
export default function Footer() {
    const classes=useStyles();
    return (
        <footer className={classes.footer}>
            <h1>The Venue</h1>
            <p>The venue {date.getFullYear()}.All rights reserved</p>
        </footer>
    )
}
