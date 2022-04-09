import { GlobalStyle } from "./styles";
import "./app.css";

import {
  Sidebar,
  PageWrapper,
  Footer,
  MobileHeader,
} from "./components/layout";
import { Hero } from "./components/banner";
import { ProjectGrid } from "./components/portfolio";
import { About } from "./components/about";

import { useEffect, useState } from "react";
import { Contact, Services } from "./components/contact";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [background, setBackground] = useState("/img/nightRiverHero.jpg");

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  const toggleBackground = () => {
    setBackground((prevState) =>
      prevState === "/img/dayLakeHero.jpg"
        ? "/img/nightRiverHero.jpg"
        : "/img/dayLakeHero.jpg"
    );
  };

  return (
    <>
      <GlobalStyle />
      <Sidebar showSidebar={showSidebar}>Hello!</Sidebar>
      <PageWrapper>
        <MobileHeader toggleSidebar={toggleSidebar}></MobileHeader>
        <Hero url={background} onClick={toggleBackground}></Hero>
        <About></About>
        <ProjectGrid> </ProjectGrid>
        <Services></Services>
        <Contact></Contact>
        <Footer></Footer>
      </PageWrapper>
    </>
  );
}

export default App;
