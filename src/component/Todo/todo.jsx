import React,{useState} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import useStyle from './styles';
const Todo = () =>
{
   const classes=useStyle();
    
  const [addit,setadd]=useState("");
  const [items,setitems]=useState(['Add something']);
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
    <h1 style={{fontFamily:'Poppins',fontSize:'15px',fontWeight:'bold',backgroundColor:"#d49f9f",width:"200px",height:"20px",textAlign:'center',paddingTop:'10px',paddingBottom:'10px',borderRadius:'5px',boxShadow:"2px 2px 2px 2px grey"}} className={classes.heading}>TO DO LIST</h1>
   <br/>
   <div className={classes.part}>
   <input style={{height:'30px', padding:'0 0 0 0' ,position:'relative',bottom:'6px'}}type="text" placeholder="What's Next:" onChange={inputvalue} value={addit}></input>
   <button onClick={clickclick}><AddCircleIcon></AddCircleIcon></button>
     
     {items.map( (itemvalue,index) => 
     {
     return (
        <div className={classes.element}>
        <button style={{marginRight:'8px'}} onClick={() =>deleteitem(index)}><RemoveCircleIcon></RemoveCircleIcon></button>{itemvalue}
        </div>
     )
     
     })}
   </div>
   
  
    
    </div>
   
  </div>

</div>
</>
  )
}

export default Todo;