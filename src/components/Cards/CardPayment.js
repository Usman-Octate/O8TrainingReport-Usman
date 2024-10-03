import React from "react";
import styled from "styled-components";
import { FaRegCircleCheck } from "react-icons/fa6";
import CardLogo from "../../assets2/CompanySettings/MasterCard.svg";
import Minus from "../../assets2/CompanySettings/MinusIcon.svg";

const Wrapper = styled.div`
  width: 170px;
  height: 80px;
  background-color: ${(props) => (props.bgColor ? "#eaf3fe" : "transparent")};
  border: ${(props) => (props.border ? "1px solid #a2a7af" : "none")};
  border-radius: 8px;
  padding: 0px 15px;
  margin: 20px 15px;
  position: relative;
`;

const Title = styled.div`
  color: #7d838f;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.div`
  font-size: 11px;
  font-weight: normal;
  color: #7d838f;
`;

const CardDetails = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
`;

const Main = styled.div``;

const MinusIcon = styled.img`
  position: absolute;
  top: -5px; /* Adjusts the vertical position */
  right: -3px; /* Adjusts the horizontal position, moving it outside the card */
`;

const CardPayment = ({
  CardType,
  CheckIcon,
  CardNumber,
  CardDate,
  Image,
  Border,
  background,
  Logo,
}) => {
  return (
    <Main>
      <Wrapper border={Border} bgColor={background}>
        <MinusIcon src={Minus} alt="minus icon" />
        <Wrap>
          <Title>{CardType}</Title>
          {CheckIcon && <FaRegCircleCheck color="#34c759" />}
        </Wrap>
        <CardDetails>
          {Logo && (
            <img src={Image} width={"20px"} height={"20px"} alt="Card Logo" />
          )}
          <div>
            <Text>{CardNumber}</Text>
            <Text>{CardDate}</Text>
          </div>
        </CardDetails>
      </Wrapper>
    </Main>
  );
};

export default CardPayment;
