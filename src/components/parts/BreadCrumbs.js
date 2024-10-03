import React from "react";
import styled from "styled-components";

const NavTitle = styled.div`
  color: #7d8398;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const NavActiveTitle = styled.div`
  color: #023f81;
  /* font-weight: 500; */
`;
const NavDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BreadCrumbs = () => {
  return (
    <NavDiv>
      {props.firstNav ? (
        <NavTitle>
          <div>{props.firstNav}</div>
          {/* <Image> */}
          <img src={Arrow} alt="Nav" />
          {/* </Image> */}
        </NavTitle>
      ) : (
        ""
      )}
      {props.secNav ? (
        <NavTitle>
          <div>{props.secNav}</div>

          <img src={Arrow} alt="Nav" />
        </NavTitle>
      ) : (
        ""
      )}
      {props.subNav ? (
        <NavTitle>
          <div>{props.sec}</div>

          <img src={Arrow} alt="Nav" />
        </NavTitle>
      ) : (
        ""
      )}
      {props.thirdNav ? (
        <NavTitle>
          <div>{props.thirdNav}</div>

          <img src={Arrow} alt="Nav" />
        </NavTitle>
      ) : (
        ""
      )}
      {props.fourthNav ? (
        <NavTitle>
          <div>{props.fourthNav}</div>

          <img src={Arrow} alt="Nav" />
        </NavTitle>
      ) : (
        ""
      )}
      <NavActiveTitle>{props.navActive}</NavActiveTitle>
    </NavDiv>
  );
};

export default BreadCrumbs;
