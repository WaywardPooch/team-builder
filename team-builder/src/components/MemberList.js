// Import Libraries
import React from "react";
import styled from "styled-components";

// Setup Styles
const StyledMemberList = styled.div`
  display: flex;
  justify-content: center;
  div {
    max-width: 800px;
    p {
      background-color: white;
      border-radius: 7px;
      box-shadow: 0 2px 4px 0 ${(props) => props.theme.shadow};
      font-size: 2rem;
      margin: 1rem 0;
      padding: 2rem;
      text-align: center;
    }
  }
`;

// Create MemberList component
const MemberList = (props) => {
  // Set up states
  const { members } = props;

  // Return component markup
  return (
    <StyledMemberList>
      <div>
        {members.length > 0 &&
          members.map((member) => {
            return <p>{member}</p>;
          })}
      </div>
    </StyledMemberList>
  );
};

// Export MemberList component
export default MemberList;
