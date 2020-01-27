import styled, { keyframes, css } from "styled-components";
import { RefObject } from "react";

export const slideNavInDesktop = keyframes`
  0%{ transform:translateX(-7vw); }
  100%{ transform:translateX(0); }
`;

export const slideNavOutDesktop = keyframes`
  0%{ transform:translateX(0); }
  100%{ transform:translateX(-7vw); }
`;

export const slideNavInTablet = keyframes`
  0%{ transform:translateX(-100vw); }
  100%{ transform:translateX(3vw); }
`;

export const triggerIconBarSlideDesktop = css`
  animation: ${slideNavInDesktop} 1s 1s forwards;
`;

export const triggerIconBarSlideAwayDesktop = css`
  animation: ${slideNavOutDesktop} 1s 1s forwards;
`;

export const triggerIconBarSlideTablet = css`
  animation: ${slideNavInTablet} 1s 1s forwards;
`;

export const IconBarWrapper = styled.div<{
  ref: RefObject<HTMLDivElement>;
}>`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: black;
  color: white;
  font-size: 1.3rem;
  position: relative;
  z-index: 100;
  transform: translateX(0);

  svg:nth-child(2) {
    align-self: flex-end;
    opacity: 0;
  }

  @media only screen and (max-width: 800px) {
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    transform: translateX(-100vw);
    ${triggerIconBarSlideTablet}
  }

  @media only screen and (max-width: 600px) {
    width: 70vw;
    justify-content: flex-start;
  }
`;

interface IconTextWrapperProps {
  selected: boolean;
  text: string;
}

export const IconTextWrapper = styled.div<IconTextWrapperProps>`
  opacity:0;
  transition:all 0.5s;
  transform:translate(0,-1.7rem);
  ${({ selected }) =>
    selected &&
    `
    opacity: 1;
    `}
  &::after {
    content: "${({ text }) => text}";
  font-size: 1rem;
  white-space: nowrap;
  color: white;
  ${({ selected }) =>
    selected &&
    `
    padding-bottom:0;
  border-bottom:3px solid white;
    `}
  
  } 
  
  @media only screen and (max-width: 800px) {
  transform: translate(-3rem,-0.25rem);
    
  }
`;

interface NavItemWrapperProps {
  selected: boolean;
}

export const NavItemWrapper = styled.div<NavItemWrapperProps>`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > svg {
    transition: all 0.8s;
    ${({ selected }) =>
      selected &&
      `
    opacity: 0;
    `}}
  }
  &:hover > #icon-text {
    opacity: 1;
  }
  &:active > #icon-text {
    opacity: 1;
  }
  &:hover > svg {
    opacity: 0;
  }
  @media only screen and (max-width: 800px) {
    padding: 0;
    margin-left: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    &:hover > #icon-text {
      opacity: 1;
    }
    &:active > #icon-text {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;
