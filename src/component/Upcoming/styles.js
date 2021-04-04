
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (() => ({
    root: {
        // maxWidth: 345, original width style
        minWidth: 275,
        position: 'absolute',
        top: '80px',
        left: '350px',
        width: '300px',
        height: '250px',
        border: '3px solid black',
      },
      
    
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      main:{
        padding:'5px',
      }
}));

