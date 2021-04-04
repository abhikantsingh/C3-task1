import React, { useState } from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';

import useStyles from './styles';


const UpComing = () =>
{
    const Classes=useStyles();
    const[upcoming,]=useState([{dates:'6 April',time:'4:00 PM',subject:'MATHS'},
{dates:'6April,2021',time:'4:00 PM',subject:'MATHS'},
{dates:'6April,2021',time:'4:00 PM',subject:'MATHS'}])

      
   return(
      
        <Card className={Classes.root}>
            <CardContent className={Classes.cardContent}>
                <div>
                <Typography>
                    <div> UPCOMING LESSION</div> 
                </Typography>
                </div>
               
                <br></br>
                <div>
                <Typography>
                { upcoming.map((cvalue) => ( 
                       <Grid className={Classes.main}>
                       {cvalue.dates}
                       {cvalue.time}
                       {cvalue.subject}
                       </Grid>
                 ))}
                </Typography>
               </div>
            
          
               
            </CardContent>
        </Card>
   );
   
};


export default UpComing;

