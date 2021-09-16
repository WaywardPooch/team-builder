// Import Libraries
import React, { useState } from "react";
import styled from "styled-components";

// Import Components
import Header from "./Header";
import Form from "./Form";
import MemberList from "./MemberList";

// Setup styles
const StyledApp = styled.div`
  background-color: ${(props) => props.theme.white};
`;

// Create the App Component
const App = () => {
  const [members, setMembers] = useState([
    {
      name: "Samwise Gamgee",
      email: "sgamgee@theshire.com",
      role: "Gardener",
    },
    {
      name: "Laegolas",
      email: "laegolas@rivendell.com",
      role: "Scout",
    },
  ]);
  // Return markup
  return (
    <StyledApp>
      <Header />
      <Form members={members} setMembers={setMembers} />
      <MemberList members={members} />
    </StyledApp>
  );
};

// Export the App component
export default App;
