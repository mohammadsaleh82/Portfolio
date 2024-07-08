import { Box, Divider, Tab, Tabs, Typography, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import getTabs from "../../helpers/SidebarTabs";
import { FaCopyright, FaHeart } from "react-icons/fa";
const CustomTab = styled(Tab)(() => ({
  "&.MuiTab-root": {
    minHeight: "50px",
    borderRadius: 5,
    margin: "2px 5px",
    background: grey[800],
  },
}));

const SidebarFooter = () => {
  const {
    pageNumber: value,
    handlePageNumber: onChange,
    handleDrawerOpen,
  } = useContext(MainContext);

  return (
    <>
      <Tabs
        orientation="vertical"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={value}
        onChange={onChange}
      >
        {getTabs().map((tab, index) => (
          <CustomTab
            sx={{ color: "whitesmoke" }}
            key={index}
            {...tab}
            iconPosition="start"
            onClick={handleDrawerOpen}
          />
        ))}
      </Tabs>
      <Divider variant="middle" sx={{ my: 2 }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            color: "whitesmoke",
          }}
        >
          <Typography>ساخته شده با</Typography>
          <Typography variant="h6" sx={{ color: "error.main" }}>
            <FaHeart />
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ color: "whitesmoke" }}>
          کپی رایت 1403 <FaCopyright />
        </Typography>
      </Box>
    </>
  );
};

export default SidebarFooter;
