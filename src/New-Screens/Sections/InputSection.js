import React, { useState } from "react";
import styled from "styled-components";
import {
  Wrap5,
  Wrapper5,
  FirstRow,
  Check2,
  Text,
  Check1,
  Line,
  Title5,
} from "../Components/HeroSections/Style";
import ChartAccountInput from "../../components/Inputs/ChartAccountInput";
import DropdownInput from "../../components/Inputs/DropdownInput";
import LargeButton from "../../components/buttons/LargeButton";
import CalenderInput from "../../components/Inputs/CalenderInput";
import { useSelector } from "react-redux";
import Auto from "../../assets2/ChartOfAccountNew/InputAuto.svg";
import TitleOfSection from "../Components/TitleOfSection";
import { InputPost } from "../../Api/Apis";

const InputSection1 = styled.div``;
const Text2 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #5f656f;
  width: 120px;
  padding-left: 12px;
`;

const InputSection = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [isTick, setIsTick] = useState(true);
  const [isCheck, setIsCheck] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [isdefaultCheck, setIsDefaultCheck] = useState(true); // Default is checked

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const HandleRevrese =(event)=>{
    setIsDefaultCheck(event.target.checked);
  }


  const handleOnTick = () => {
    setIsTick(!isTick);
  };
  const handleOnCheck = () => {
    setIsCheck(!isCheck);
  };

  return (
    <InputSection1>
      <TitleOfSection title={props.title} />
      <Line />
      <Wrap5>
        <Wrapper5>
          <FirstRow>
            <ChartAccountInput
              Name={props.firstInput}
              Hash="*"
              Padding={true}
              setWidth={"true"}
              image={Auto}
            />
            <ChartAccountInput
              Name="Description"
              Padding={"P"}
              setWidth={"false"}
            />
            <Check2>
              <Text2>Auto Reversal</Text2>
              <input
                style={{ width: "15.5px", height: "15.5px" }}
                type="checkbox"
                onClick={handleOnTick}
                checked={isChecked}
                onChange={handleChange}
              />
            </Check2>
          </FirstRow>
          <FirstRow>
            <CalenderInput Name={props.secondInput} width={true} />
            <DropdownInput Name={"Currency"} Padding={false} setWidth={false} />
            <Check1>
              <Text txtColor={themeKeys.primary}>Recurr Transaction</Text>
              <input
                style={{ width: "16px", height: "16px" }}
                type="checkbox"
               onChange={HandleRevrese}
               checked={isdefaultCheck}
                onClick={handleOnCheck}
              />
            </Check1>
            <CalenderInput
              Name={"Reversal Date"}
              width={true}
              disable={isTick? false: true}
            />
          </FirstRow>
          <FirstRow>
            <CalenderInput Name={"Posting Date"} Hash={"*"} width={true} />
            {props.value ? (
              <DropdownInput
                Name={"Project"}
                Padding={false}
                setWidth={false}
              />
            ) : (
              <ChartAccountInput
                Name={props.name}
                Padding={true}
                setWidth={"true"}
                insertFromRight={true}
              />
            )}
            <DropdownInput
              Name={"Frequency"}
              Padding={false}
              setWidth={false}
              check={isCheck ? false : true}
            />
          </FirstRow>
          <FirstRow>
            <CalenderInput Name={"Due Date"} width={true} />
            <DropdownInput
              Name={"Department"}
              Padding={false}
              isDropdownOpen={false}
              setWidth={false}
            />
            <ChartAccountInput
              Name={"Interval"}
              Padding={true}
              setWidth={"true"}
              disable={isCheck ? false : true}
              insertFromRight={true}
            />
          </FirstRow>
          <FirstRow>
            <ChartAccountInput
              Name={"Extra Ref.Number"}
              Padding={true}
              setWidth={"true"}
              insertFromRight={true}
            />
            <DropdownInput Name={"Division"} Padding={false} setWidth={false} />
            <CalenderInput
              Name={"Recurring Date"}
              width={true}
              disable={isCheck ? false : true}
            />
          </FirstRow>
        </Wrapper5>
        <div>
          <LargeButton font={"heavy"} name={"Posted"} />
        </div>
      </Wrap5>
    </InputSection1>
  );
};

export default InputSection;
