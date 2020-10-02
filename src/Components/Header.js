import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from '@material-ui/core';
import Drawer from './Drawer'

const useStyles=makeStyles((theme)=>({
    right:{
        marginRight:"auto",
        padding:"10px 0px"
    },
    rightMain:{
        fontSize:"2em"
    },
    rightSub:{
        textTransform:"uppercase"
    },
    menuIcon:{
        color:"#FFF"
    }
}))

export default function Header(props) {
    const classes=useStyles();
    return (
        <React.Fragment>
        <AppBar position="fixed" style={{backgroundColor:props.changeHeaderColor?"#2F2F2F":"transparent",boxShadow:"none"}} >
          <Toolbar variant="regular">
              <div className={classes.right}>
                  <div className={classes.rightMain}>The Venue</div>
                  <div className={classes.rightSub}>musical events</div>
              </div>
              <IconButton disableRipple onClick={()=>props.setDrawer()}>
                  <MenuIcon className={classes.menuIcon}/>
              </IconButton>
          </Toolbar>
        </AppBar>
            <Drawer openDrawer={props.openDrawer} setDrawer={props.setDrawer}/>
        </React.Fragment>
        
    )
}
