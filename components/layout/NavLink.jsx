"use client";
import Link from "next/link";
import styled from "styled-components";

const NavLink = ({ name, children }) => {
  return (
    <Wrapper>
      <Link href={`#${name}`}>
        {children}
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 100%;
  text-align: center;

  transition: all 200ms ease-out;

  &:hover {
    background-color: var(--color-primary-700);
    color: white;
    transform: scale(1.1);
  }

  a {
    display: block;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export default NavLink;
