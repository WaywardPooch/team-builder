import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledMemberList = styled.div`
  display: flex;
  justify-content: center;
  div {
    max-width: 800px;
    p {
      background-color: white;
      box-shadow: 0 2px 4px 0 ${(props) => props.theme.shadow};
      font-size: 2rem;
      margin: 1rem 0;
      padding: 2rem;
      text-align: center;
    }
  }
`;

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(["Samwise Gamgee", "Frodo Baggins", "Strider", "Gandalf"]);
  }, [members]);

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

export default MemberList;
