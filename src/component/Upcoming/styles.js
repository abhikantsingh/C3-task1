
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (() => ({
    root: {
        
        minWidth: 275,
        position: 'absolute',
        top: '80px',
        left: '350px',
        width: '300px',
        height: '250px',
        border: '0px solid black',
        backgroundColor:'',        
        borderRadius:'15px',
        boxShadow:"rgba(0,0,0,0.35)0px 5px 15px"
      },
      
    
      cardContent: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
      },
      main:{
        padding:'5px',
        margin:'5px',
        flexDirection:'column',
        borderRadius:'15px',
        backgroundColor:'',
        border:'1px solid',
        height:'70px',
        boxShadow:"2px 3px grey"
      },
      section:{
       position:"relative",
       bottom:"10px",
      },
      image:{
       position:'relative',
       left:'190px',
       bottom:'50px',
      }
    }))