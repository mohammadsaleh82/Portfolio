import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  value: number;
  index: number;
  children: ReactNode;
}
const Page = ({ children, index, value }: Props) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`sidebar-tab-${index}`}
      aria-labelledby={`sidebar-tabpanel-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default Page;
