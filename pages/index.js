import React from "react";
import styled from "styled-components";
import stylesheet from "styles/global.scss";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const page = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    <Title>This is title</Title>
    <div>Welcome to next.js!</div>
    <div className="gel-wrap">
      <div className="gel-layout">
        <div className="gel-layout__item gel-1/2 gel-1/4@m">a</div>
        <div className="gel-layout__item gel-1/2 gel-1/4@m">b</div>
        <div className="gel-layout__item gel-1/2 gel-1/4@m">c</div>
        <div className="gel-layout__item gel-1/2 gel-1/4@m">d</div>
      </div>
    </div>
  </div>
);

export default page;
