import Grid2 from "@mui/material/Unstable_Grid2";
import { ReactNode } from "react";
import { grey } from "@mui/material/colors";
interface Props {
  children: ReactNode;
}
const SidebarContainer = ({ children }: Props) => {
  return (
    <Grid2
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={3}
      sx={{
        backgroundColor: grey[900],
        height: "100vh",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      {children}
    </Grid2>
  );
};

export default SidebarContainer;
