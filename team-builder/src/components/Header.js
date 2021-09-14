import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.black};
  h2 {
    color: ${(props) => props.theme.white};
    font-size: 3rem;
    letter-spacing: 0.25rem;
    padding: 20px;
    text-align: center;
    text-transform: uppercase;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h2>Team Builder</h2>
    </StyledHeader>
  );
};

export default Header;
