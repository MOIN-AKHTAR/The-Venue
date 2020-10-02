import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
    drawer:{
        background:theme.palette.common.blue
    },
    list:{
        ...theme.typography.tab
    },
    listItem:{
        opacity:"0.7",
        "&:hover":{
            opacity:"1"
        }
    }
}))

export default function Drawer(props) {
    const classes=useStyles();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    return (
        <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={props.openDrawer} onClose={props.setDrawer} onClick={props.setDrawer}
        anchor="right" classes={{paper:classes.drawer}}
        >
           <List className={classes.list}>
               <ListItem button divider className={classes.listItem}>
                   <ListItemText>Event Start in</ListItemText>
               </ListItem>
               <ListItem button divider className={classes.listItem}>
                   <ListItemText>Venue NFO</ListItemText>
               </ListItem>
               <ListItem button divider className={classes.listItem}>
                   <ListItemText>Highlights</ListItemText>
               </ListItem>
               <ListItem button divider className={classes.listItem}>
                   <ListItemText>Pricing</ListItemText>
               </ListItem>
               <ListItem button divider className={classes.listItem}>
                   <ListItemText>Location</ListItemText>
               </ListItem>
           </List>
        </SwipeableDrawer>
    )
}
