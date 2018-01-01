import React from "react";
import styled from "styled-components";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const page = () => (
  <MuiThemeProvider>
    <Title>This is title</Title>
    <div>Welcome to next.js!</div>
    <RaisedButton label="Default" />
  </MuiThemeProvider>
);

export default page;
