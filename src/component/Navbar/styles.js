import { makeStyles } from '@material-ui/core/styles';



export default makeStyles(() => ({
  ul:{
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        width: '25%',
        backgroundColor: '#f1f1f1',
        position: 'fixed',
        height: '100%',
        overflow: 'auto',
      },
      title:{
          position:'relative',
          bottom:'250px',
          left:'40%'
      },
      element:{
      
      },
      sub:{
         padding:'10px',
         position:"relative",
      },
      '&:sub:Hover':{
         backgroundColor:'yellow',
      }
}));