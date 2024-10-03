import React from "react";
import styled from "styled-components";

import { RotatingLines } from "react-loader-spinner";
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        visible={true}
        height="35"
        width="35"
        strokeColor="#464f60cc"
        strokeWidth="3"
        animationDuration="0.8"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderContainer>
  );
};

export default Loader;
