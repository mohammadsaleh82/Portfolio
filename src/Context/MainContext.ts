import { SyntheticEvent, createContext } from "react";

export default createContext({
    pageNumber:0,
    handlePageNumber:(event: SyntheticEvent, pageNumber: number)=>{},
    drawerOpen:false,
    handleDrawerOpen:()=>{},

})