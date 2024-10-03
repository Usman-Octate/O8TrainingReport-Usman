import React from "react";
import styled from "styled-components";
import { FaRegCircleCheck } from "react-icons/fa6";

const StartUp = styled.div`
  display: flex;
  align-items: start;
  gap: 40px;
  margin: 20px 0;
  padding: 5px 15px;
  border-radius: 8px;
`;
const Title3 = styled.div`
  color: #2e90fa;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 15px;
`;
const Sec3 = styled.div`
  width: 350px;
`;
const Per = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #90959f;
`;
const Sec4 = styled.div``;
const CompInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Wrap3 = styled.div`
  margin: 15px 0px;
`;
const Text4 = styled.div`
  font-size: 12px;
  color: #2e90fa;
  font-weight: 400;
`;
const Edit3 = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #eaf3fe;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
`;
const Line2 = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 1px;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #34c759;
  margin: 10px 15px;
`;
const Para = styled.div`
  font-size: 12px;
  color: #90959f;
  width: 350px;
  font-weight: normal;
  margin: 10px 15px;
`;
const Payment = styled.div``;
const Cash = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #464f60;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin: 5px 15px;
`;
const Sign = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #464f60;
`;
const Time = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #90959f;
  text-align: center;
  margin: 0px 15px;
`;
const Btn = styled.button`
  font-size: 13px;
  font-weight: bold;
  color: #7d838f;
  background-color: transparent;
  border: 2px solid #7d838f;
  padding: 10px 60px;
  border-radius: 8px;
  margin: 10px 15px;
  width: 270px;
  cursor: pointer;
`;
const HeadText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #7d838f;
  margin: 15px 15px;
`;
const Sec2 = styled.div``;

const Subtext = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 15px;
`;
const Text2 = styled.div`
  font-size: 11px;
  font-weight: normal;
  color: #90959f;
`;

const StartupTrial = ({ title, subText, buttonName }) => {
  const Data = [
    { Name: "Single User" },
    { Name: "Single Company" },
    { Name: "Multi-Currency" },
    { Name: "Multiple Item UoM" },
    { Name: "Multi-Location" },
    { Name: "5GB Storage" },
  ];

  return (
    <StartUp>
      <Sec3>
        <Title3>{title}</Title3>
        <Para>{subText}</Para>
        <Payment>
          <Cash>
            <Sign>$</Sign>0
            <div>
              <Per>/per user</Per>
              <Per>/per month</Per>
            </div>
          </Cash>
        </Payment>
        <div style={{ width: "350px", textAlign: "center" }}>
          <Btn>{buttonName}</Btn>
        </div>
      </Sec3>
      <Sec4>
        <HeadText>Available features on free trial</HeadText>
        {Data.map((item, index) => {
          return (
            <Subtext>
              <FaRegCircleCheck color="#34c759" />
              <Text2>{item.Name}</Text2>
            </Subtext>
          );
        })}
      </Sec4>
    </StartUp>
  );
};

export default StartupTrial;
