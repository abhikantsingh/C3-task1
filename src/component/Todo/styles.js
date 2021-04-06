import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (() => ({
    main_div:{
       
        position: 'absolute',
        top: '77px',
        left: '670px',
        width: '300px',
        height: '250px',
        border: '0px solid black',
        backgroundColor:'white',
        borderRadius:'15px',
        boxShadow:"rgba(0,0,0,0.35)0px 5px 15px"
    },

    element:{
       position:'relative',
        right:'10px',
        width:'80%',
        backgroundColor:'',
        flexDirection:'column',
        marginBottom:'5px',
        border:'0px solid',
        borderRadius:'5px',
        boxShadow:'2px 2px 2px 2px grey'
      
    },
    heading:{
        position:'relative',
        bottom:'0px',
        left:'50px'
    },
    part:{
        position:'relative',
        left:'30px',
        bottom:'0px',
        borderCollapse:'separate',
        borderSpacing:"10px",
    },
   
 }));
  

