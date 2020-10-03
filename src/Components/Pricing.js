import React from 'react';
import {makeStyles,Button} from '@material-ui/core';
import Zoom from 'react-reveal/Zoom';
import {Element} from 'react-scroll';


const useStyles=makeStyles({
 pricing_Wrapper:{
     backgroundColor:"#353535",
     padding:"10px 0px"
 },
 main_Wrapper:{
     width:'750px',
     margin:"0px auto",
     padding:"30px 0px",
     display:"flex",
     justifyContent:"center",
     boxSizing:"border-box"
 },
 item:{
    width:"33%",
    textAlign:"center",
    border:"1px solid orange",
    margin:"0px 1rem",
    boxSizing:"border-box",
    padding:"35px 10px",
    color:"#FFF",
    fontWeight:"lighter"
 },
 price:{
     fontSize:"40px",
 },
 label:{
     width:"90%",
     borderBottom:"1px solid #fff",
     textAlign:"center",
     margin:"0 auto",
     padding:"5px 0px",
     marginBottom:"10px",
     fontFamily:"sans-serif",
     fontWeight:"300",
     boxSizing:"border-box"
 },
  desc:{
    fontFamily:"sans-serif",
    fontWeight:"300",
    lineHeight: "23px",
    letterSpacing: "2px",
    marginBottom: "10px",
    textAlign:"center",
    boxSizing:"border-box"
  }
});
const price=[100,150,250];
const label=["BALCONY","MEDIUM","STAR"];
const desc=["Lorem ipsum dolor sit amet consectetur adipisicing elit.",
"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
"Lorem ipsum dolor sit amet consectetur adipisicing elit."
];
const delay=[500,0,500];

export default function Pricing() {
     const classes=useStyles();
    return (
    <Element name="pricing">
        <div className={classes.pricing_Wrapper} id="pricing">
            <div className={classes.main_Wrapper}>
                {price.map((p,index)=>(
                    <Zoom delay={delay[index]} key={index}>
                    <div className={classes.item}>
                        <h1 className={classes.price}>{p} $</h1>
                        <h2 className={classes.label}>{label[index]}</h2>
                        <h4 className={classes.desc}>{desc[index]}</h4>
                        <Button disableRipple disableElevation variant="contained" color="primary">Purchase Ticket</Button>
                    </div>
                    </Zoom>
                ))}
            </div>
        </div>
    </Element>
    )
}
