import { useState, SyntheticEvent } from "react";
import "./App.css";
import PagesContainer from "./PagesContainer";
import Sidebar from "../Components/Sidebar/Sidebar";
import Page from "../Components/Page";
import MainLayout from "../Layouts/MainLayout";
import MainContext from "../Context/MainContext";
import SwipeableViews from "react-swipeable-views";
import { Home } from "../Pages";
import { Typography } from "@mui/material";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const handlePageNumber = (event: SyntheticEvent, pageNumber: number) => {
    setPageNumber(pageNumber);
  };
  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <MainContext.Provider
      value={{ drawerOpen, handlePageNumber, pageNumber, handleDrawerOpen }}
    >
      <MainLayout>
        <>
          <Sidebar />
          <PagesContainer>
            <SwipeableViews axis="y" index={pageNumber}>
              <Page value={pageNumber} index={0}>
                <Home />
              </Page>
              <Page value={pageNumber} index={1}>
                <Typography sx={{height:'100vh'}}>me</Typography>
              </Page>
              <Page value={pageNumber} index={2}>
                <h1>resume</h1>
              </Page>
              <Page value={pageNumber} index={3}>
                <h1>work</h1>
              </Page>
              <Page value={pageNumber} index={4}>
                <h1>comment</h1>
              </Page>
              <Page value={pageNumber} index={5}>
                <h1>contact us</h1>
              </Page>
            </SwipeableViews>
          </PagesContainer>
        </>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
