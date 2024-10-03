import React from "react";
import styled from "styled-components";
import MyDropzone from "./MyDropzone";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255);
  width: 400px;
  height: 535px;
  border-radius: 8px;
  position: absolute;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
const Wrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 900;
  background-color: rgba(150, 149, 149, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 1px 19px 20px black;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  margin: 10px 20px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dadbdf;
  margin-bottom: 20px;
`;

const AttachmentUpload = ({ stateChange, CancelAction }) => {
  return (
    <Wrap>
      <Wrapper>
        <Title>Upload File</Title>
        <Line />
        <MyDropzone CancelAction={CancelAction} stateChange={stateChange} />
      </Wrapper>
    </Wrap>
  );
};

export default AttachmentUpload;
