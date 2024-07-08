import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { ReactElement } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"; 
import CustomeTheme from "./Theme/CustomeTheme";

interface Props {
  children: ReactElement | null;
}
const MainLayout = (props: Props) => {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const { children } = props;
  return (
    <CacheProvider value={cacheRtl}>
      <CustomeTheme>
        <Grid2 container sx={{minHeight:'100vh'}}>{children}</Grid2>
      </CustomeTheme>
    </CacheProvider>
  );
};

export default MainLayout;
