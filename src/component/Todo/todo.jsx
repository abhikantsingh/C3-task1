import React,{useState} from 'react';

import useStyle from './styles';
const Todo = () =>
{
   const classes=useStyle();
    
  const [addit,setadd]=useState("");
  const [items,setitems]=useState(['']);
  const inputvalue = (event) =>
  {
    setadd(event.target.value);
  }
  const clickclick = () =>
  {
     setitems((olditems) =>
     {
       return [...olditems,addit];
     });
     setadd("");
  };
  const deleteitem = (index) =>
  {
    setitems((olditems) => {
      return olditems.filter((arrelem,ind) => {
         return(ind !== index);
      })
    })
  }
  return(
<>
<div className={classes.main_div}>
  <div className={classes.center_div}>
    <div className={classes.text}>
    <h1 className={classes.heading}>TO DO LIST</h1>
   <br/>
   <input type="text" placeholder="add item:" onChange={inputvalue} value={addit}></input>
   <button onClick={clickclick}>+</button>

   <ol>
     
     {items.map( (itemvalue,index) => 
     {
     return (
        <li>
        <button onClick={deleteitem(index)}>*</button>{itemvalue}
        </li>
     )
     
     })}
   </ol>
    
    </div>
   
  </div>

</div>
</>
  )
}

export default Todo;