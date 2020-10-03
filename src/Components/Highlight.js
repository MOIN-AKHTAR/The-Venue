import React,{useState,useEffect,useCallback} from 'react';
import {makeStyles,Button} from "@material-ui/core";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'


const useStyles=makeStyles({
    highlight_wrapper:{
        width:"900px",
        margin:"0 auto"
    },
    highlight:{
        textAlign:"center",
        textTransform:"uppercase",
        fontWeight:"bolder",
        padding:"30px 0px",
        marginBottom:"20px",
        borderBottom:"1px solid #ccc"
    },
    info:{
        fontFamily:'sans-serif',
        lineHeight:"24px",
        letterSpacing:"1px",
        paddingBottom:"20px",
        borderBottom:"1px solid #ccc"
    },
    discount_Wrapper:{
        display:"flex",
        padding:"50px 0px"
    },
    left:{
        paddingRight:"70px"
    },
    right:{
        lineHeight:"28px",
        letterSpacing:"1px"
    }
})

export default function Highlight() {
    const [percentage, setPercentage] = useState(0);
    const classes=useStyles();
    // CounterUp
    const increaserPercentage=useCallback(()=>{
        if(percentage<30){
            setPercentage(percentage+1)
        }
    },[percentage]);

useEffect(() => {
    setTimeout(() => {
        increaserPercentage()
    }, 30);
}, [percentage,increaserPercentage])
    return (
        <div className={classes.highlight_wrapper}>
            <div className={classes.highlight}>
                <h1>Highlights</h1>
            </div>
            <p className={classes.info}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolor repellendus possimus et animi iusto hic corporis voluptatum. Optio quis minima odio, in quo corporis! Ipsum iure consequatur adipisci delectus tempore cumque quisquam eum labore quasi sint, dolorum voluptas laboriosam nostrum impedit eius ad necessitatibus fuga. Nam, quos quas quod nesciunt similique expedita enim debitis eligendi qui, maxime totam repellat? Doloremque amet officiis omnis placeat? Dignissimos quos ipsum voluptatibus ab.</p>
            <div className={classes.discount_Wrapper}>
            <Fade onReveal={ () =>  increaserPercentage() }>
                 <div className={classes.left}>
                  <h1 style={{fontSize:"70px",color:"#d93d00",fontWeight:"normal"}}>{percentage}%</h1>  
                <h3 style={{fontSize:"30px",fontWeight:"normal"}}>OFF</h3>
                 </div>
             </Fade>
                  <Slide right duration={500}>
                  <div className={classes.right}>
                           <h3>Purchase tickets before 1st January 2021</h3>
                           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsum nulla eligendi porro optio doloribus mollitia quasi quia. Necessitatibus iusto laudantium cum iure nobis magnam aliquid minus sint animi suscipit!</p>
                <Button disableRipple disableElevation variant="outlined" color="secondary">Purchase Ticket</Button>
                  </div>
                  </Slide>
            </div>
        </div>
    )
}
