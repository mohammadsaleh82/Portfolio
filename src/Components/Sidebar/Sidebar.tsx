import SidebarContainer from "../../Container/SidebarContainer";
import { SidebarContent } from ".";
import { SidebarDrawer, SidebarDrawerActionButton } from "../Drawer";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarDrawerActionButton />
      <SidebarContent />
      <SidebarDrawer />
    </SidebarContainer>
  );
};

export default Sidebar;
