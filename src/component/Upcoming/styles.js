
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
        backgroundColor:' #e8d5eb',
        borderRadius:'5px',
        boxShadow:'3px 5px'
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
        backgroundColor:'#cae6d8',
        border:'1px solid',
        height:'70px'
      },
      section:{
       
      },
      image:{
       position:'relative',
       left:'190px',
       bottom:'50px'
      }
    }))