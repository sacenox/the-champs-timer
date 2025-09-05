import React from "react";
import { CenteredContainer, RowContainer } from "./molecules/containers";
import LabelAndValue from "./molecules/label-and-value";

const Content: React.FC = () => {
  return (
    <CenteredContainer className="p-4">
      <RowContainer>
        <LabelAndValue label="Round time:" value="3 min" />
        <LabelAndValue label="Rest time:" value="30 sec" />
      </RowContainer>
      <CenteredContainer>
        <LabelAndValue label="Current round:" value="10" size="large" />
      </CenteredContainer>
    </CenteredContainer>
  );
};

export default Content;
