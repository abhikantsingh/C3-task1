import React, { useState } from 'react';

import useStyles from "./styles";



const LeadeBoars = () =>
{
    const classes=useStyles();
    const [leadername,]=useState([
        {name:'Name:Sagar',score:'Score:2000',profile:'data:image/png;base64,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'},
        {name:'Name:Saurav',score:'Score:1500',profile:'data:image/png;base64,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'},
        {name:'Name:Sarthak',score:'Score:1000',profile:'data:image/png;base64,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'}
        ]);
        
   return(
     <div className={classes.root}>
         <div className={classes.topic}>LEADERBOARD</div>
         <div>
            { leadername.map((value) =>
            (
                <div className={classes.part}>
                  <div>
                      <div>{value.name}</div>
                      <div>{value.score}</div>
                      <img  className={classes.image}style={{width:'50px',height:'50px',borderRadius:'50%'}} src={value.profile}></img>
                      </div>
                </div>
            ))
}
         </div>
     </div>
   )
}

export default LeadeBoars;