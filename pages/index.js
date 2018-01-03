import React from "react";
import styled from "styled-components";
import ThemeProvider from "react-toolbox/lib/ThemeProvider";
import Button from "react-toolbox/lib/button/Button";
import AppBar from "react-toolbox/lib/app_bar/AppBar";
import theme from "../static/theme";
import Head from "next/head";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const page = () => (
  <div>
    <Title>This is title</Title>
    <div>Welcome to next.js!</div>
    <Head>
      <link href="/static/theme.css" rel="stylesheet" />
    </Head>
    <ThemeProvider theme={theme}>
      <AppBar>
        <Button raised primary>
          Hello
        </Button>
      </AppBar>
    </ThemeProvider>
  </div>
);

export default page;
