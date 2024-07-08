import { ThemeProvider, createTheme } from "@mui/material";
import {ReactElement} from "react";

interface Props {
  children: ReactElement| null;
}
const CustomeTheme = (   props:Props) => {
  const theme = createTheme({
    direction: "rtl",
    palette:{
        mode:'dark',
        primary:{
            main:'#8BE9FD'
        },
        secondary:{
            main:'#BD93F9'
        },
        warning:{
            main:'#F1FA8C'
        },
        error:{
            main:'#FF5555'
        },
    },
    typography: {
      fontFamily: "Vazir",
    },
    components:{
        MuiButtonBase:{
            defaultProps:{
                disableRipple:false,
        
            }
        }
    }
  });

  return <ThemeProvider theme={theme}><>{props.children}</></ThemeProvider>;
};

export default CustomeTheme;
