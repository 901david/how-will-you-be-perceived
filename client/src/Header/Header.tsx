import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #009ffd 0%, #2a2a72 74%);
  font-size: 55px;
  letter-spacing: 10px;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Cookie", cursive;
`;

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = props => {
  return <HeaderContainer>{props.title}</HeaderContainer>;
};

Header.defaultProps = {
  title: "How Will Your Review Be Perceived?"
};

export default Header;
