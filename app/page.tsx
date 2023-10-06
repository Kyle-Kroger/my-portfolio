"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import {
  Sidebar,
  PageWrapper,
  Footer,
  MobileHeader,
} from "../components/layout";
import { Hero } from "../components/banner";
import { ProjectGrid, MySkills } from "../components/portfolio";
import { About } from "../components/about";
import { Contact, Services } from "../components/contact";

// So that the rest of the page will scroll over the hero image
const ZWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [background, setBackground] = useState("/img/space.webp");

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
      <Sidebar showSidebar={showSidebar} toggleBackground={toggleBackground}>
        Hello!
      </Sidebar>
      <PageWrapper>
        <MobileHeader toggleSidebar={toggleSidebar}></MobileHeader>
        <Hero url={background}></Hero>
        <ZWrapper>
          <About></About>
          <MySkills />
          <ProjectGrid> </ProjectGrid>
          <Contact></Contact>
          <Footer></Footer>
        </ZWrapper>
      </PageWrapper>
    </>
  );
}
