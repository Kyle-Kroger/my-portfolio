import styled from "styled-components/macro";
import { ReactLogo, Html5, Css3 } from "@styled-icons/fa-brands";
import { Javascript, TailwindCss, Git } from "@styled-icons/boxicons-logos";
import {
  Styledcomponents,
  Nextdotjs,
  Mongodb,
  Nodedotjs,
  Express,
  Postgresql,
  Prisma,
  Typescript,
} from "@styled-icons/simple-icons";
import helpers from "../../styles/helpers";

const ICONS = {
  react: {
    name: "React",
    icon: () => {
      return <ReactLogo size={32} color={"#61DAFB"} />;
    },
  },
  html5: {
    name: "HTML5",
    icon: () => {
      return <Html5 size={32} color={"#D66A37"} />;
    },
  },
  css: {
    name: "CSS3",
    icon: () => {
      return <Css3 size={32} color={"#2F49D4"} />;
    },
  },
  javascript: {
    name: "Javascript",
    icon: () => {
      return <Javascript size={32} color={"#E4D04B"} />;
    },
  },
  styledcomponents: {
    name: "Styled Components",
    icon: () => {
      return <Styledcomponents size={32} color={"white"} />;
    },
  },
  tailwind: {
    name: "Tailwind",
    icon: () => {
      return <TailwindCss size={32} color={"#38BDF8"} />;
    },
  },
  nextjs: {
    name: "Next.js",
    icon: () => {
      return <Nextdotjs size={32} color={"#0c0c0c"} />;
    },
  },
  mongodb: {
    name: "MongoDB",
    icon: () => {
      return <Mongodb size={32} color={"#4DA640"} />;
    },
  },
  nodejs: {
    name: "Node.js",
    icon: () => {
      return <Nodedotjs size={32} color={"#7FC728"} />;
    },
  },
  express: {
    name: "Express",
    icon: () => {
      return <Express size={32} color={"white"} />;
    },
  },
  postgresql: {
    name: "PostgreSQL",
    icon: () => {
      return <Postgresql size={32} color={"white"} />;
    },
  },
  prisma: {
    name: "Prisma",
    icon: () => {
      return <Prisma size={32} color={"black"} />;
    },
  },
  typescript: {
    name: "Typescript",
    icon: () => {
      return <Typescript size={32} color={"#2F72BC"} />;
    },
  },
  git: {
    name: "Git",
    icon: () => {
      return <Git size={32} color={"#E44C30"} />;
    },
  },
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 2px var(--spacing-sm);
  border-radius: var(--radius-subtle);
  h5 {
    padding-top: 6px;
  }
`;

const IconWrapper = styled.div`
  ${helpers.flexCenter}

  width: 36px;
  height: 36px;
`;

const Skill = ({ name }) => {
  if (!ICONS[name.toLowerCase()]) {
    return <h5>Icon Not Found</h5>;
  }
  return (
    <Wrapper>
      <IconWrapper>{ICONS[name.toLowerCase()].icon()}</IconWrapper>
      <h5>{ICONS[name.toLowerCase()].name}</h5>
    </Wrapper>
  );
};

export default Skill;
