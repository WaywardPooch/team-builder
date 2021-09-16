import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  align-items: center;
  background-color: ${(props) => props.theme.backgroundForm};
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem 0;
  h3 {
    font-size: 2rem;
    text-transform: uppercase;
  }
  label {
    font-size: 2rem;
    margin-top: 1rem;
    input {
      border: none;
      font-size: 2rem;
      margin: 0 1rem;
    }
    button {
      background-color: ${(props) => props.theme.white};
      border: none;
      color: ${(props) => props.theme.black};
      font-size: 2rem;
      transition: 200ms;
      &:hover {
        background-color: ${(props) => props.theme.black};
        color: ${(props) => props.theme.white};
      }
    }
  }
`;

const Form = (props) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const { members, setMembers } = props;

  const handleChange = (event) => {
    setNameInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMembers([...members, nameInputValue]);
  };

  return (
    <StyledForm>
      <h3>Add a team member</h3>
      <label>
        Name:
        <input type="text" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" onChange={handleChange} />
      </label>
      <label>
        Role:
        <input type="text" onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </StyledForm>
  );
};

export default Form;
