import {createMuiTheme} from '@material-ui/core/styles';

const arcBlue="#0B72B9";
export const theme=createMuiTheme({
    palette: {
        common:{
            blue:`${arcBlue}`
        }
    },
    typography:{
        tab:{
            color:"#FFF",
            fontWeight:"bold"
        }
    }
})