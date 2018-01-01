import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const page = () => (
  <div>
    <Title>This is title</Title>
    <div>Welcome to next.js!</div>
  </div>
);

export default page;
