import React from 'react';
import {makeStyles} from '@material-ui/core';
import Carousel from './Carousel'

const useStyles=makeStyles((theme)=>({
    featured:{
        position:"relative"
    },
    artist:{
        position:"absolute"
    },
    artistName:{
    border: "2px solid white",
    height: "121px",
    margin: "6px",
    textAlign: "center",
    color: "#fff",
    fontSize: "40px",
    padding: "5px 70px 0px 70px",
    textTransform: "uppercase",
    }
    
}))

export default function Featured() {
    const classes=useStyles();
    return (
        <div className={classes.featured}>
        <Carousel/>
            <div className="artist" style={{position:"absolute"}}>
                <div className={classes.artistName}>
                     Ariana Grande
                </div>
            </div>
        </div>
    )
}
