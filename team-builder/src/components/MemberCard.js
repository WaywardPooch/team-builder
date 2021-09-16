import React from "react";
import styled from "styled-components";

const StyledMemberCard = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  margin: 1rem 0;
  padding: 1rem;
  h3 {
    padding: 1rem;
    font-size: 3rem;
  }
  p {
    padding: 0.5rem;
    font-size: 1.6rem;
  }
`;

const MemberCard = (props) => {
  const { name, email, role } = props.memberInfo;

  return (
    <StyledMemberCard>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </StyledMemberCard>
  );
};

export default MemberCard;
