import * as React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import styled from "styled-components";
import { useMappedState } from "react-use-mapped-state";

import Header from "./Header";
import SideBar from "./SideBar";
import { triggerIconBarSlideAwayDesktop } from "./SideBar/SideBar-Components";

const Main = styled.main<{}>`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div<{}>`
  display: flex;
  height: 85vh;

  @keyframes desktopNavClose {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-7vw);
    }
  }

  @keyframes desktopNavOpen {
    0% {
      transform: translateX(-7vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  .desktop-nav-close {
    animation: desktopNavClose 1s forwards;
  }

  .desktop-nav-open {
    animation: desktopNavOpen 1s forwards;
  }
`;

const App: React.FC = () => {
  const [{ isSideBarOpened }, valueSetter] = useMappedState({
    isSideBarOpened: true
  });

  const triggerSideBar = () => valueSetter("isSideBarOpened", !isSideBarOpened);

  return (
    <Router>
      <Main>
        <Header />
        <MainContainer>
          <SideBar
            isSideBarOpened={isSideBarOpened}
            triggerSideBar={triggerSideBar}
          />
          <Route exact path="/" component={() => <Redirect to="/about" />} />
          <Route
            path="/about"
            component={() => <h1 style={{ background: "orangered" }}>Hi</h1>}
          />
          {/* <Route path="/users" component={Predictor} /> */}
        </MainContainer>
      </Main>
    </Router>
  );
};

export default App;
