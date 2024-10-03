import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Tabs = styled.div`
  display: flex;
  /* align-items: center; */
`;
const Title2 = styled.div`
  color: ${(props) => (props.isActive ? props.txtColor : "#7f7f7f")};
  font-size: 12px;
  font-weight: 700;
  height: 23px;
  /* width: 150px; */
  text-align: center;
  margin: 0px 15px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isActive ? `3px solid ${props.txtColor}` : null};
`;
const Line2 = styled.div`
  background-color: #7f7f7f;
  width: 0.7px;
  height: 14px;
  border-radius: 10px;
`;
const Navigator = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabNavigation = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const getColor = (item) =>
    props.activeTab === item ? themeKeys.primary : themeKeys.c6;
  return (
    <div style={{ width: "100%" }}>
      <Navigator>
        {props.TabName.map((item) => {
          return (
            <Tabs>
              <Title2
                color={getColor()}
                onClick={() => props.tabChange(item)}
                isActive={props.activeTab === item}
                txtColor={themeKeys.primary}
              >
                {item}
              </Title2>
              <Line2 />
            </Tabs>
          );
        })}
      </Navigator>
    </div>
  );
};

export default TabNavigation;
