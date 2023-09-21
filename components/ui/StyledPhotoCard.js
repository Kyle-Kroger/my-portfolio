"use client";

import styled from "styled-components";
import { helpers } from "../../styles";

const StyledPhotoCard = styled.figure`
  ${helpers.card}
  position: relative;
  width: 100%;
  max-width: ${(p) => (p.maxWidth ? p.maxWidth : "100%")};
  height: ${(p) => (p.height ? p.height : "100%")};
  transition: all 300ms ease-in-out;

  //Hiding the overflow of the image when it is hovered
  overflow: hidden;

  img {
    height: 100%;
    margin-bottom: 2%;
    border-radius: var(--radius-subtle);
    transition: transform 400ms ease-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default StyledPhotoCard;
