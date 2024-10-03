import React from "react";
import styled from "styled-components";

const Image = styled.div`
  background-color: ${(props) => props.Background};
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin: auto;
`;
const Wrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1.3597630262374878px 6.798815727233887px 0px #00000040;

  border-radius: 6px;
  height: 115px;
  width: 80px;
  padding: 15px 10px;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
`;
const Title2 = styled.div`
  text-align: center;
  padding: 5px 0px;
`;
const Text2 = styled.div`
  color: #464f60cc;
  font-size: 12px;
  font-weight: 700;
  margin: auto;
  height: 13.5px;
`;
const Text3 = styled.div`
  color: #464f60;
  font-size: 20.4px;
  font-weight: 700;
  height: 18px;
  padding: 5px 0px;
`;

const Card = (props) => {
  const iconsrc = require(`../../assets2/ChartOfAccountNew/${props.icon}.svg`);

  return (
    <>
      <Wrapper>
        <Image Background={props.Background}>
          <img src={iconsrc} alt="swsw" />
          <Text1>{props.icontitle}</Text1>
        </Image>
        <Title2>
          <Text2>{props.title}</Text2>
          <Text3>{props.number}</Text3>
        </Title2>
      </Wrapper>
    </>
  );
};

export default Card;
