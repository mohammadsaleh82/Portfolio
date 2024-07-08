import { FaComment } from "react-icons/fa";
import { IoHome, IoNewspaper, IoPersonSharp } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { SiCsharp, SiJavascript, SiReact } from "react-icons/si";
import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";

interface TabProps {
  id: string;
  "aria-controls": string;
}

const CustomTabProps = (index: number): TabProps => {
  return {
    id: `sidebar-CustomTab-${index}`,
    "aria-controls": `sidebar-CustomTabpanel-${index}`,
  };
};

interface Tab extends TabProps {
  label: ReactElement | string;
  icon?: ReactElement;
}
const  getTabs = () => {
  const tabs:Tab[] = [
    { label: "خانه", icon: <IoHome />, ...CustomTabProps(0) },
    { label: "درباره من", icon: <IoPersonSharp />, ...CustomTabProps(1) },
    { label: 'رزومه', icon: <IoNewspaper />, ...CustomTabProps(2) },
    {
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: 1, mr: 1 }}>
            <Typography sx={{ color: "secondary.main" }}>
              <SiCsharp />
            </Typography>
            <Typography sx={{ color: "primary.main" }}>
              <SiReact />
            </Typography>
            <Typography sx={{ color: "warning.main" }}>
              <SiJavascript />
            </Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ color: "whitesmoke" }}>
            نمونه کارها
          </Typography>
        </div>
      ),
      ...CustomTabProps(3),
    },
    { label: 'نظرات دانشجویان', icon: <FaComment />, ...CustomTabProps(4) },
    {
      label:' ارتباط با من',
      icon: <MdConnectWithoutContact />,
      ...CustomTabProps(5),
    },
  ];

  return tabs;
};


export default getTabs;