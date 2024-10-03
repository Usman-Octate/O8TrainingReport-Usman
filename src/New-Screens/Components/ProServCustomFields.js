import React from "react";
import styled from "styled-components";
import ChartAccountInput from "../../components/Inputs/ChartAccountInput";
import { useAppContext } from "../../context/AppProvider";
import { useSelector } from "react-redux";
import DropDown from "../../components/buttons/DropDown";

const Wrapper = styled.div`
margin-left: 2px;`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin: 20px 0px 20px 10px;
`;
const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 5px 0px;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  margin-left: 5px;
`;
const Input = styled.div`
  width: 200px;
  margin: 20px 0px;
`;
const MainSec = styled.div``;
const Image = styled.div`
margin-left: 2px`;
const ProServCustomFileds = ({ Line1 }) => {
  const { isToggle, Handle } = useAppContext();
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const keys = useSelector((state) => state.localization.keys);

  return (
    <>
      <MainSec id="contact">
        <Title>
          <Image style={{ cursor: "pointer" }} onClick={Handle}>
            {isToggle ? (
              <DropDown size={"Small"} icon={"ArrowDown"} />
            ) : (
              <DropDown size={"Small"} icon={"ArrowRight"} />
            )}
          </Image>
          <Text txtColor={themeKeys.primary}>{keys.KEY100248}</Text>
        </Title>
        {Line1 === "true" ? <Line /> : null}
        {isToggle ? (
          <Wrapper>
            <Input>
              <ChartAccountInput Name={keys.KEY100249} Padding={true} />
            </Input>
            <Input>
              <ChartAccountInput Name={keys.KEY100250} Padding={true} />
            </Input>
            <Input>
              <ChartAccountInput Name={keys.KEY100251} Padding={true} />
            </Input>
            <Input>
              <ChartAccountInput Name={keys.KEY100252} Padding={true} />
            </Input>
          </Wrapper>
        ) : null}
      </MainSec>
      {Line1 === "true" ? null : <Line />}
    </>
  );
};

export default ProServCustomFileds;
