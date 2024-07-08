import { 
  Box,
  Divider, 
} from "@mui/material";

import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";




const DrawerContent = () => {
 
  return (
    <Box
      sx={{
        textAlign: "center",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <SidebarHeader />
      <Divider variant="middle" sx={{ my: 2 }} />
      <SidebarFooter/>
   
    </Box>
  );
};

export default DrawerContent;
