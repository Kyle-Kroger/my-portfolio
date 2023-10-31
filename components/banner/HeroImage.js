"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFirstRender } from "../../Hooks";

const HeroImage = ({ children, url, height, className }) => {
  const [newUrl, setNewUrl] = useState(url);
  const [animated, setAnimated] = useState(false);
  const firstRender = useFirstRender();

  useEffect(() => {
    let timeout;
    if (!firstRender) {
      setAnimated(true);
      timeout = setTimeout(() => {
        setNewUrl(url);
        setAnimated(false);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [url, firstRender]);

  return (
    <>
      <HeroImgBackground
        className={className}
        $url={url}
        $newUrl={newUrl}
        $animated={animated}
      >
        {children}
      </HeroImgBackground>
      <Overlay />
    </>
  );
};

const HeroImgBackground = styled.div`
  background-image: url(${(p) => p.$newUrl});
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0);
`;

export default HeroImage;
