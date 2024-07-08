import Grid2 from "@mui/material/Unstable_Grid2";
import { ReactNode } from "react";

interface Props {
    children:ReactNode ;
  }
const PagesContainer = ({children}:Props) => {
  return (
    <Grid2
    xs={12}
    sm={12}
    md={9}
    lg={10}
    xl={9}
    sx={{ backgroundColor: "secondary.main", textAlign: "center" }}
  >
    {children}
  </Grid2>
  )
}

export default PagesContainer