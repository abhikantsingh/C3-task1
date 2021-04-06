import React,{useState} from 'react';
import {Bar} from "react-chartjs-2";

 import useStyles from "./styles";
const Chart = () =>
{
   const [graph,setGraph]=useState({
       chartData:{
           labels:["maths","physics","english","sst"],
           datasets:[
               {
                   label:"progress",
                   data:[
                      2,
                      3,
                      4,
                      5,
                   ],
                   backgroundColor:"yellow",
               }
           ]
       }
   })
  
  
    const classes=useStyles();
    return (
      <div className={classes.Chart}>
       <Bar 
       data={graph}
       options={{}}
       />
      </div>
    )
  
}

export default Chart;