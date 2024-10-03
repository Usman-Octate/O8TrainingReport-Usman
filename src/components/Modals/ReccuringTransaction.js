import React, { useState } from "react";
import styled from "styled-components";
import ChartAccountInput from "../Inputs/ChartAccountInput";
import DropdownInput from "../Inputs/DropdownInput";
import CalenderInput from "../Inputs/CalenderInput";
import AgGridTable from "../../components/Table/AgGridTable";
import HeadlessTable from "../../components/Table/HeadlessTable";
import { useSelector } from "react-redux";
import { Divider, Flex, Stack, Table, Checkbox } from "@mantine/core";
import Info from "../../assets2/ButtonIcons/InformationIcon.svg";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255);
  width: 25vw;
  height: 76vh;
  border-radius: 20px;
  position: absolute;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  /* -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px); */
`;

const Text = styled.div`
  font-size: 11px;
  font-weight: 400;
  color: #464f60;
  margin-top: 1.8%;
  /* margin-left: 20%; */
  text-align: center;
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
const Btn = styled.button`
  background-color: #2e90fa;
  padding: 12px 30px;
  border-radius: 8px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  margin-top: 3rem;
`;
const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
  height: 40px;
`;
const TagLine = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #464f60;
  text-align: center;
`;
const Div = styled.div`
  margin-top: 8%;
`;
const Btn2 = styled.div`
  background-color: white;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  color: #464f60;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  margin-top: 3rem;
`;
const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin-top: 40px;
  text-align: center;
  width: 281px;

  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
  padding-bottom: 10px;
`;
const Column1 = styled.div`
  /* width: 40%; */
  height: 60vh;
  margin-top: 10px;
`;
const Column2 = styled.div`
  width: 23vw;
  height: 50vh;
  margin-top: 30px;
`;
const GridTable = styled.div``;
const WholeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 80px;
  width: 45vw;
`;
const Gap = styled.div`
  margin: 15px 0;
`;
const Tagline = styled.div`
  color: #6a727f;
  font-size: 11px;
  font-weight: bold;
`;
const Days = styled.div`
  width: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.isSelected ? "#2e90fa" : "#d9d9d9")};
  padding: 4px;
  cursor: pointer;
`;
const DaySelector = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Text3 = styled.div`
  color: #6a727f;
  font-size: 11px;
  font-weight: bold;
`;
const CheckCircle = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  accent-color: #4ed164;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  background-color: #fff;
  border: 1px solid #464f604d;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: #4ed164;
    border: 2px solid #4ed164;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 7px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -60%) rotate(45deg);
  }
`;
const Second = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 4px;
  border: 1px solid #c7cacf;
  color: #464f60;
  font-size: 11px;
  /* padding: 9px; */
  text-align: center;
  outline: none;
`;
const T = styled.div`
  text-align: center;
  color: ${(props) => (props.changeColor ? "#ffffff" : "#464f60")};
  font-size: 12px;
  margin-top: 1px;
`;
const DraftSec = styled.div``;
const DateSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  color: #464f60;
  font-size: 11px;
`;
const ThirdOne = styled.input`
  width: 100px;
  /* height: 13px; */
  border-radius: 4px;
  border: 1px solid #c7cacf;
  color: #464f60;
  font-size: 11px;
  padding: 9px 0px;
  text-align: center;
  outline: none;
`;
const Line2 = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ecedef;
`;
const WrapCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  width: 262px;
`;
const InfoSection = styled.div`
  background-color: #eef5ff;
  width: 262px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;
const Image = styled.img`
  width: 17px;
  height: 17px;
`;
const InfoText = styled.div`
  color: #464f60;
  font-size: 11px;
  font-weight: 300;
  width: 235px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 281px;
  margin: auto;
`;
// const Contain = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: end;
//   gap: 30px;
//   height: 10px;
//   margin-right: 30px;
// `;
// const Btn2 = styled.div`
//   background-color: white;
//   padding: 10px 14px;
//   border-radius: 8px;
//   box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
//   color: #464f60;
//   border: none;
//   cursor: pointer;
//   font-size: 15px;
//   font-weight: bold;
//   margin-top: 3rem;
// `;
// const Btn = styled.button`
//   background-color: #2e90fa;
//   padding: 12px 20px;
//   border-radius: 8px;
//   box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
//   color: white;
//   border: none;
//   cursor: pointer;
//   font-size: 15px;
//   font-weight: 500;
//   margin-top: 3rem;
// `;

const ReccuringTransaction = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;

    // Allow empty value, numbers, or a single period for decimal input
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setNumber(value);
    }
  };

  const FrequencyDropdown = [
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
    { label: "Semi-Annual", value: "Semi-Annual" },
    { label: "Annualy", value: "Annualy" },
  ];
  return (
    <Wrap>
      <Wrapper>
        <Main>
          <Title txtColor={themeKeys.primary}>
            RECURRING TRANSACTION DEFAULT
          </Title>
          <DropdownInput
            Name={"Frequency"}
            setWidth={"long"}
            Data={FrequencyDropdown}
          />
          <DaySelector>
            <Tagline>Repeats On</Tagline>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              {["M", "T", "W", "Th", "F", "St", "S"].map((day) => (
                <Days
                  key={day}
                  isSelected={selectedDay === day}
                  onClick={() => handleDayClick(day)}
                >
                  <T changeColor={selectedDay === day}>{day}</T>
                </Days>
              ))}
            </div>
          </DaySelector>
          <DraftSec>
            <Text3>Ends</Text3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: " #464F60",
                fontSize: "10px",
                marginTop: "10px",
                width: "150px",
              }}
            >
              <CheckCircle type="checkbox" /> After
              <Second type="text" value={number} onChange={handleChange} />
              Occurence
            </div>
          </DraftSec>
          <DateSec>
            <CheckCircle type="checkbox" /> On
            <ThirdOne type="input" />
          </DateSec>
          <Line2 />
          <WrapCheck>
            <Checkbox type="checkbox" />
            <Text>Recurring Transaction will be saved as draft</Text>
          </WrapCheck>
          <InfoSection>
            <Image src={Info} alt="dwe" />
            <InfoText>
              Recurring transaction are automatically created based on a
              configured schedule
            </InfoText>
          </InfoSection>
          <Contain>
            <Btn2 onClick={props.cancel}>Cancel</Btn2>
            <Btn onClick={props.save}>Save</Btn>
          </Contain>
        </Main>
      </Wrapper>
    </Wrap>
  );
};

export default ReccuringTransaction;
