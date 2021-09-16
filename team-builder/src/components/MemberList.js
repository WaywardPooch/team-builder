// Import Libraries
import React from "react";
import styled from "styled-components";

// Import components
import MemberCard from "./MemberCard";

// Setup Styles
const StyledMemberList = styled.div`
  display: flex;
  justify-content: center;
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
            return <MemberCard memberInfo={member} />;
          })}
      </div>
    </StyledMemberList>
  );
};

// Export MemberList component
export default MemberList;
