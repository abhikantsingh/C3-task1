import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (() => ({
    root: {
        
        position: 'absolute',
        top: '350px',
        left: '350px',
        width: '600px',
        height: '180px',
        border: '0 solid black',
        backgroundColor:"white ",
        borderRadius:'15px',
        boxShadow:"rgba(0,0,0,0.35)0px 5px 15px"
      },
      main:{
        position:"relative",
        top:"30px",
        border:'2px solid black',
        borderRadius:'10px',
        width: '46%',
         height: '100px',
         marginRight:'10px',
         marginLeft:'10px',
       display: 'inline-block',
       backgroundColor:''
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