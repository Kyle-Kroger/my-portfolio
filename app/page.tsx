"use client";

import { useState } from "react";
import styled from "styled-components";

import { PageWrapper, Footer } from "../components/layout";
import { Hero } from "../components/banner";
import { ProjectGrid, MySkills } from "../components/portfolio";
import { About } from "../components/about";
import { Contact } from "../components/contact";

// So that the rest of the page will scroll over the hero image
const ZWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export default function Home() {
  const [background, setBackground] = useState("/img/space.webp");

  return (
    <>
      <PageWrapper>
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
