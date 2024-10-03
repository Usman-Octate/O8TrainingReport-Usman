import React from "react";
import Arrow from "../../../assets2/DashboardHeaderIcons/BreadCrumbArrow.svg";
import styled from "styled-components";

const NavTitle = styled.div`
  color: #7d8398;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const NavActiveTitle = styled.div`
  color: #023f81;
`;
const NavDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const NavigationHeader = styled.div`
  padding: 8px 0;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 10px;
  }
  @media (max-width: 500px) {
    margin-top: 1.5rem;
    width: 100vw;
  }
`;

const Image = styled.div`
  @media (max-width: 600px) {
    img {
      width: 5px;
    }
  }
`;
const AccountNewHeader = (props) => {
  return (
    <NavigationHeader>
      <NavDiv>
        {props.firstNav ? (
          <NavTitle>
            <div>{props.firstNav}</div>
            <Image>
              <img src={Arrow} alt="Nav" />
            </Image>
          </NavTitle>
        ) : (
          ""
        )}
        {props.secNav ? (
          <NavTitle>
            <div>{props.secNav}</div>

            <img src={Arrow} alt="Nav" height={11} />
          </NavTitle>
        ) : (
          ""
        )}
        {props.thirdNav ? (
          <NavTitle>
            <div>{props.thirdNav}</div>

            <img src={Arrow} alt="Nav" height={11} />
          </NavTitle>
        ) : (
          ""
        )}{" "}
        {props.fourthNav ? (
          <NavTitle>
            <div>{props.fourthNav}</div>

            <img src={Arrow} alt="Nav" height={11} />
          </NavTitle>
        ) : (
          ""
        )}
        <NavActiveTitle>{props.navActive}</NavActiveTitle>
      </NavDiv>
    </NavigationHeader>
  );
};

export default AccountNewHeader;
