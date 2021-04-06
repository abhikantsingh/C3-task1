import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { mergeClasses } from '@material-ui/styles';
import HomeIcon from '@material-ui/icons/Home';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import ForumIcon from '@material-ui/icons/Forum';
import GestureRoundedIcon from '@material-ui/icons/GestureRounded';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
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
                      <div className={classes.sub} style={{ display:'inline-flex',
    VerticalAlign: 'text-bottom',
    BoxSizing: 'inherit',
    AlignItems: 'center'}}><HomeIcon></HomeIcon>HOME</div>
                      <div className={classes.sub} style={{ 
    VerticalAlign: 'text-bottom',
    BoxSizing: 'inherit',
    
    AlignItems: 'center'}}> <LineStyleIcon></LineStyleIcon>DASHBOARD </div>
                      <div className={classes.sub}
                       style={{ 
    VerticalAlign: 'text-bottom',
    BoxSizing: 'inherit',
    AlignItems: 'center'}}>
                      <ContactSupportRoundedIcon></ContactSupportRoundedIcon>
                      MY COURSE 
                      </div>
                      <div className={classes.sub}
                      style={{ 
                      VerticalAlign: 'text-bottom',
                      BoxSizing: 'inherit',
                      AlignItems: 'center'}}><GestureRoundedIcon></GestureRoundedIcon>ACHIEVEMENTS</div>
                
                      <div className={classes.sub}
                      style={{ 
                      VerticalAlign: 'text-bottom',
                      BoxSizing: 'inherit',
                      AlignItems: 'center'}}><ForumIcon></ForumIcon>FORUM</div>
                     
                  </Typography>
               </div>
           </Toolbar>
       </AppBar>
  )
}

export default NavBar;


