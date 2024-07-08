import { Box, Fab } from "@mui/material";
import { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import MainContext from "../../Context/MainContext";

const SidebarDrawerActionButton = () => {
  const {handleDrawerOpen}=useContext(MainContext)
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
        },
        position:'absolute'
      }}
    >
      <Fab color="error" size="small" onClick={handleDrawerOpen} sx={{ m: 2 }}>
        <IoMenu />
      </Fab>
    </Box>
  );
};

export default SidebarDrawerActionButton;
