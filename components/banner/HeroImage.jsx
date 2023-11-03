import styled from "styled-components";

const HeroImage = ({ children, url, height, className }) => {
  return (
    <>
      <HeroImgBackground className={className} $url={url}>
        {children}
      </HeroImgBackground>
      <Overlay />
    </>
  );
};

const HeroImgBackground = styled.div`
  background-image: url(${(p) => p.$url});
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
