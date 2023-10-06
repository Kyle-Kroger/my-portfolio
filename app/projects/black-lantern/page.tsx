"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import {
  Sidebar,
  PageWrapper,
  Footer,
  MobileHeader,
} from "../../../components/layout";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [background, setBackground] = useState("/img/space.webp");

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <>
      <Sidebar showSidebar={showSidebar} />
      <PageWrapper></PageWrapper>
    </>
  );
}
