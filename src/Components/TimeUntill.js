import React,{useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Fade from 'react-reveal/Fade'

const useStyles=makeStyles({
    timeUntill:{
        position:"absolute",
        bottom:"0px",
        color:"#FFF"
    },
    timeUntill_Top:{
        background:"#ff4800",
        padding:"10px 5px",
        border:"none",
        textTransform:"uppercase",
        fontWeight:"500",
        letterSpacing:"1.5px",
        display:'inline-block'
    },
    timeUntill_Bottom:{
        background:"#d93d00",
        display:"flex",
        padding:"10px 20px"
    },
    timeUntill_time:{
    fontSize: "70px",
    borderRight: "1px solid #F44336",
    marginRight: "14px",
    paddingRight: "49px"
    },
    timeUntill_tag:{
        fontSize:"20px"
    }
})

export default function TimeUntill() {
    const classes=useStyles();
    const date="Dec, 16, 2020";
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [hour, setHour] = useState(0)
    const [day, setDay] = useState(0)
    const getTimeUntill=(deadLine)=>{
        const time=Date.parse(deadLine)-Date.parse(new Date());
        if(time<0){
            setSec("00");
            setMin("00");
            setHour("00");
            setDay("00");
        }else{
            const sec=Math.floor((time/1000)%60);
            const min=Math.floor((time/(1000*60))%60);;
            const hour=Math.floor((time/(1000*60*60))%24);;
            const day=Math.floor((time/(1000*60*60*24)));
            setSec(sec);
            setMin(min);
            setHour(hour);
            setDay(day);
        }
    }


    useEffect(()=>{
        setInterval(()=>getTimeUntill(date),1000)
    },[])

    return (
    <Fade left delay={1000}>
        <div className={classes.timeUntill}>
            <div className={classes.timeUntill_Top}>
                event starts in
            </div>
            <div className={classes.timeUntill_Bottom}>
             <div className={classes.timeUntill_item}>
                 <div className={classes.timeUntill_time}>
                    {day}
                 </div>
                 <div className={classes.timeUntill_tag}>
                    Days
                 </div>
             </div>
             <div className={classes.timeUntill_item}>
                 <div className={classes.timeUntill_time}>
                    {hour}
                 </div>
                 <div className={classes.timeUntill_tag}>
                    Hs
                 </div>
             </div>
             <div className={classes.timeUntill_item}>
                 <div className={classes.timeUntill_time}>
                    {min}
                 </div>
                 <div className={classes.timeUntill_tag}>
                    Min
                 </div>
             </div>
             <div className={classes.timeUntill_item} >
                 <div className={classes.timeUntill_time} style={{
                 borderRight:"none",
                 paddingRight:"0px",
                 marginRight:"0px"
             }}>
                    {sec}
                 </div>
                 <div className={classes.timeUntill_tag}>
                    Sec
                 </div>
             </div>
            </div>
        </div>
    </Fade>
    )
}
