

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppProvider";
import DropDown from "../../components/buttons/DropDown";
import { useSelector } from "react-redux";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin: 15px 10px;
  margin-bottom: 3.9vh;
  margin-top: 3.9vh;
  // margin-top: 22px;
  /* margin-top: 25px; */
`;

const Btn = styled.div``;
const Textutil = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  width: 120px;
  margin-left: 6px;
`;
const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 10px 0px;
`;
const Wrapper = styled.div`
  background-color: #ffffff;
  margin: 0px 10px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  /* width: 97%; */
  height: 263px;
  border: none;
  padding: 30px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;
const Para = styled.div`
  font-size: 12px;
  color: #464f60cc;
`;
const SubText = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 18px;
  margin-top: 20px;
`;
const Btn1 = styled.button`
  border: none;
  width: 91px;
  height: 36px;
  background-color: ${(props) => props.btnColor};
  border-radius: 8px;
  font-size: 12px;
  color: #464f60cc;
  font-weight: 700;
`;
const Text = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #464f60cc;
`;
const Grab = styled.div`
  margin-top: 50px;
`;
const Image = styled.div`
margin-left: 3px`;
// const ActivitySectionContainer = styled.div``;

const ProductServicesActivitySection = () => {
  const { HandleOnChange, isView } = useAppContext();
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  return (
    <>
      <div id="activitySection" style={{ marginBottom: "1.4rem" }}>
        <Section>
          <Image style={{ cursor: "pointer" }} onClick={HandleOnChange}>
            {isView ? (
              <DropDown size={"Small"} icon={"ArrowDown"} />
            ) : (
              <DropDown size={"Small"} icon={"ArrowRight"} />
            )}
          </Image>
          <Textutil txtColor={themeKeys.primary}>ACTIVITY</Textutil>
        </Section>

        {isView ? (
          <Wrapper>
            <Btn1 btnColor={themeKeys.lightVersion}>23 JAN 2023</Btn1>
            <SubText>
              <Text>11:27 AM</Text>
              <Para>
                Sent an email with attachment Invoice 23213 to
                accounts@capitiqueglobal.com by user Abak26@frepasla.xyz
              </Para>
            </SubText>
            <SubText>
              <Text>11:27 AM</Text>
              <Para>
                Sent an email with attachment Invoice 23213 to
                accounts@capitiqueglobal.com by user Abak26@frepasla.xyz
              </Para>
            </SubText>
            <Grab>
              <Btn1 btnColor={themeKeys.lightVersion}>23 JAN 2023</Btn1>
              <SubText>
                <Text>11:27 AM</Text>
                <Para>
                  Sent an email with attachment Invoice 23213 to
                  accounts@capitiqueglobal.com by user Abak26@frepasla.xyz
                </Para>
              </SubText>
            </Grab>
          </Wrapper>
        ) : null}
        <Line />
      </div>
    </>
  );
};

export default ProductServicesActivitySection;
