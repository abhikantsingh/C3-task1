import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (() => ({
    root: {
        
        position: 'absolute',
        top: '350px',
        left: '350px',
        width: '600px',
        height: '150px',
        border: '0 solid black',
        backgroundColor:" #e8d5eb",
        borderRadius:'5px',
        boxShadow:'3px 5px'
      },
      main:{
        border:'2px solid black',
        borderRadius:'10px',
        width: '46%',
         height: '100px',
         marginRight:'10px',
         marginLeft:'10px',
       display: 'inline-block',
       backgroundColor:'#cae6d8'
      },
      image:{
        position:'relative',
        bottom:'25px',
        left:'220px'
      },
      written:{
        position:"relative",
        bottom:"40px",
        left:'20px',
      }
    }));   