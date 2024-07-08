import { Drawer } from "@mui/material";
import { SidebarContent } from "../Sidebar";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";

const SidebarDrawer = () => {
  const { drawerOpen, handleDrawerOpen } = useContext(MainContext);
  return (
    <Drawer
      open={drawerOpen}
      onClose={handleDrawerOpen}
      variant="temporary"
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
        },
        "& .MuiDrawer-paper": {
          width: 300,
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  );
};

export default SidebarDrawer;
