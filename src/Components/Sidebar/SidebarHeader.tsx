import { Avatar, Box, Typography } from "@mui/material";
import me1 from "../../assets/me1.jpg";
const SidebarHeader = () => {
  return (
    <>
      <Box display={{ xs: "none", md: "block" }}>
        <Avatar
          alt="محمد صالح انجم شعاع"
          src={me1}
          sx={{ width: 200, height: 200, margin: "0 auto" }}
          variant="rounded"
        />
      </Box>

      <Typography variant="h6" sx={{ color: "whitesmoke" }}>
        محمد صالح انجم شعاع
      </Typography>
      <Typography variant="caption" sx={{ color: "whitesmoke" }}>
        توسعه دهنده فول استک
      </Typography>
    </>
  );
};

export default SidebarHeader;
