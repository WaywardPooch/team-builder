// Import libraries
import React from "react";
import styled from "styled-components";

// Setup styles
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

// Create Header component
const Header = () => {
  // Return markup
  return (
    <StyledHeader>
      <h2>Team Builder</h2>
    </StyledHeader>
  );
};

// Export Header component
export default Header;
