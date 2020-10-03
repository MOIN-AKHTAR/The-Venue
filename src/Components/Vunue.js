import React from 'react';
import {makeStyles} from '@material-ui/core';
import Calender from '../Assets/icons/calendar.png';
import Location from '../Assets/icons/location.png';
import Zoom from 'react-reveal/Zoom';
import {Element} from 'react-scroll';

const useStyles=makeStyles({
    wrapper:{
        background:"#1E1E1E",
        padding:"100px 0px",
        color:"#FFF"
    },
    vunueWrapper:{
        width:"900px",
        margin:"auto",
    },
    mainWrapper:{
        display:"flex",
        justifyContent:"center",
        margin:"auto",
    },
    item:{
        width:"50%",
        textAlign:"center",
        color:"#FFF",
        
    },
    outer:{
        border:"2px solid #CCC",
        width:"300px",
        padding:"3px",
        margin:"auto"
    },
    inner:{
        border:"2px solid #CCC",
        padding:"10px",
        position:"relative"
    },
    icon_Div:{
        width:"100px",
        height:"100px",
        transform:"translate(45deg)",
        position:"absolute",
        left:"100px",
        top:"-57px",
        border:"none"
    },
    bck_red:{
        background: "#ff4800"
    },
    bck_yellow:{
        background: "#ffa800"
    },
    icon:{
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "-35px",
    left: "125px",
    zIndex:"1",
    backgroundPosition:"center !important",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "contain !important",
    },
    title:{
        margin:"70px 0 20px 0",
        fontSize:"28px",
        borderBottom:"1px solid #ccc",
        paddingBottom:"10px"
    },
    desc:{
        fontSize: "30px",
        fontWeight: "300",
        marginBottom: "50px"
    }
})

export default function Vunue() {
    const classes=useStyles();
    return (
    <Element name="Venue">
        <div className={classes.wrapper}>
            <div className={classes.vunueWrapper}>
              <div className={classes.mainWrapper}>
                <Zoom duration={1000}>
                  <div className={classes.item}>
                   <div className={classes.outer}>
                        <div className={classes.inner}>
                            <div className={[classes.icon_Div,"icon_Div",classes.bck_red].join(" ")}></div>
                            <div className={classes.icon} style={{background:`url(${Calender})`}}></div>
                            <div className={classes.title}>
                            Event Date & Time
                            </div>
                            <div className={classes.desc}>
                            7 August 2017 @10.00 pm
                            </div>
                        </div>
                   </div>
                 </div>
                </Zoom>
                <Zoom delay={1000}>
                 <div className={classes.item}>
                     <div className={classes.outer}>
                       <div className={classes.inner}>
                             <div className={[classes.icon_Div,"icon_Div",classes.bck_yellow].join(" ")}></div>
                             <div className={classes.icon} style={{background:`url(${Location})`}}></div>
                             <div className={classes.title}>
                              Event Date & Time
                            </div>
                            <div className={classes.desc}>
                            7 August 2017 @10.00 pm
                            </div>
                       </div>
                      </div>
                 </div>
                </Zoom>
              </div>
            </div>
        </div>
    </Element>
    )
}
