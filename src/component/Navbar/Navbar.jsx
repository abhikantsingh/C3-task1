import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { mergeClasses } from '@material-ui/styles';

import useStyles from './styles';


const NavBar = () =>
{
   
    const classes=useStyles();
  return(
       <AppBar position="fixed" ClassName={mergeClasses.appBar} color='inherit'>
           <Toolbar className={classes.ul}>
               
                  <div className={classes.title} color='inherited'>
                  <DashboardIcon ></DashboardIcon>
                 </div> 
              
               <div className={classes.grow}></div>
               <div className={classes.button}>
                  <Typography className={classes.element}>
                      <div className={classes.sub}>HOME</div>
                      <div className={classes.sub}> DASHBOARD </div>
                      <div className={classes.sub}>
                      MY COURSE 
                      </div>
                      <div className={classes.sub}>ACHIEVEMENTS</div>
                
                      <div className={classes.sub}>FORUM</div>
                     
                  </Typography>
               </div>
           </Toolbar>
       </AppBar>
  )
}

export default NavBar;


