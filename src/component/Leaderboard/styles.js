import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (() => ({

    root:{
        position:"absolute",
        top:'20px',
        left:'1000px',
        width:'250px',
        height:'350px',
        border:'0px solid',
        borderRadius:'5px',
        boxShadow:'3px 5px',
        backgroundColor:'#e8d5eb'
    },
    part:{
        paddingLeft:'10px',
        paddingTop:'10px',
        height:'70px',
        border:'1px solid black',
        borderRadius:'10px',
        borderCollapse:'separate',
        margin:'7px',
        backgroundColor:'#cae6d8'
    },
    image:{
        position:'relative',
        left:'160px',
        bottom:'40px'
    }


}))