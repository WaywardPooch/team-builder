import logo from "../assets/logo.svg";
import "../styles/App.css";
import styled from "styled-components";

import Header from "./Header";
import MemberList from "./MemberList";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.white};
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <MemberList />
    </StyledApp>
  );
};

export default App;
