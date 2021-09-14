// Import Libraries
import styled from "styled-components";

// Import Components
import Header from "./Header";
import MemberList from "./MemberList";

// Setup styles
const StyledApp = styled.div`
  background-color: ${(props) => props.theme.white};
`;

// Create the App Component
const App = () => {
  // Return markup
  return (
    <StyledApp>
      <Header />
      <MemberList />
    </StyledApp>
  );
};

// Export the App component
export default App;
