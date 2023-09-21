import { keyframes } from "styled-components";

const animations = {
  fadeIn: keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  `,
  fadeOut: keyframes`
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  `,
};

export default animations;
