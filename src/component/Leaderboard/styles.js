import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (() => ({

    root:{
        position:"absolute",
        top:'20px',
        left:'990px',
        width:'270px',
        height:'390px',
        border:'0px solid',
        borderRadius:'15px',
        boxShadow:"rgba(0,0,0,0.35)0px 5px 15px",
        backgroundColor:'white'
    },
    part:{
        position:"relative",
        top:"33px",
        paddingLeft:'10px',
        paddingTop:'10px',
        height:'70px',
        border:'1px solid black',
        borderRadius:'10px',
        borderCollapse:'separate',
        margin:'7px',
        backgroundColor:'',
        boxShadow:"2px 3px grey"
    },
    image:{
        position:'relative',
        left:'160px',
        bottom:'40px'
    },
   topic:{
       position:'relative',
       bottom:'0px',
       left:"30px",
       fontFamily:'Poppins',fontSize:'15px',fontWeight:'bold',backgroundColor:"#d49f9f",width:"200px",height:"20px",textAlign:'center',paddingTop:'10px',paddingBottom:'10px',borderRadius:'5px',boxShadow:"2px 2px 2px 2px grey",
       top:"10px"
   }
    
}))