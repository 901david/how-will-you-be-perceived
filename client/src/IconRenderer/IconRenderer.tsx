import React from "react";
import styled from "styled-components";

const IconContainer = styled.div``;

interface IconContainerProps {
  title?: string;
}

const Header: React.FC<IconContainerProps> = props => {
  return <IconContainer></IconContainer>;
};

Header.defaultProps = {
  title: "How Will Your Review Be Perceived?"
};

export default Header;
