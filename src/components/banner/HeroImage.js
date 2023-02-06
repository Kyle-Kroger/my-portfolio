import { useEffect, useState } from "react";
import { css } from "styled-components";
import { keyframes } from "styled-components";
import styled from "styled-components/macro";
import { useFirstRender } from "../../Hooks";

const HeroImage = (props) => {
  const { children, url, height, className } = props;
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
        url={url}
        newUrl={newUrl}
        height={height}
        animated={animated}
      >
        {children}
      </HeroImgBackground>
      <Overlay />
    </>
  );
};

const changeBg = (url, newUrl) => keyframes`
  0% {opacity: 1; background-image:url(${newUrl})}
  50% {opacity: 0; background-image:url(${newUrl}) ;}
  51% {background-image: url(${url});}
  100% {opacity: 1; background-image: url(${url});}
`;

const HeroImgBackground = styled.div`
  background-image: url(${(p) => p.newUrl});
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  width: 100%;
  height: 100%;

  ${(p) =>
    p.animated &&
    css`
      pointer-events: none;
      animation: ${changeBg(p.url, p.newUrl)} 2s ease-in-out 200ms;
    `}
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
`;

export default HeroImage;
