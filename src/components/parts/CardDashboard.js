import React from "react";
import styled from "styled-components";
import ArrowUp from "../../assets2/DashboardCardIcons/CardArrow.svg";
import ArrowDown from "../../assets2/DashboardCardIcons/CardArrow2.svg";
import { useSelector } from "react-redux";
const Container = styled.div`
  box-shadow: 1px 1.3px 3px 1px #00000033;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 193px;
  max-height: 209px;
  max-width: 130px;
  padding: 7px 10px;
  border-radius: 5px;
  @media (max-width: 950px) {
    /* padding: 4px 6px; */
    height: 155px;
  }
  /* @media (max-width: 897px) {
    padding: 4px 0px;
  } */
  @media (max-width: 1190px) {
    padding: 4px 17px;
  }
  @media (max-width: 1025px) {
    padding: 4px 15px;
  }

  @media (max-width: 600px) {
    padding: 4px 2px;
    height: 116px;
  }
`;
const IconDiv = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 100%;
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: ${(props) => (props.min ? "8px" : "10px")};
  padding: 10px;

  @media (max-width: 950px) {
    width: 65px;
    height: 65px;
  }
  @media (max-width: 600px) {
    width: 34px;
    height: 34px;
    gap: 0px;
  }
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  max-width: ${(props) => (props.min ? "min-content" : "max-width")};
  text-align: center;
  margin-bottom: ${(props) => (props.min ? "-6px" : "")};

  @media (max-width: 950px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 7px;
  }
`;
const Text1 = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #464f60;
  @media (max-width: 950px) {
    font-size: 13px;
  }
  @media (max-width: 950px) {
    font-size: 11px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;
const Text2 = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 7px 0;
  @media (max-width: 950px) {
    font-size: 22px;
  }
  @media (max-width: 950px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const Text3 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #00ff00;
  margin-left: 2px;
  @media (max-width: 950px) {
    font-size: 10px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;
const Text5 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #00ff00;
  margin-left: 2px;
  @media (max-width: 950px) {
    font-size: 8px;
  }
`;
const Text4 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.color};
  @media (max-width: 950px) {
    font-size: 10px;
  }
  @media (max-width: 600px) {
    font-size: 7px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;
`;
const Percentage = styled.div`
  font-size: 12.6px;
  font-weight: 700;
  display: flex;
  color: ${(props) => props.color};
`;
const No = styled.div`
  font-size: 12.6px;
  font-weight: 700;
  display: flex;

  color: #007aff;
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;
const Image1 = styled.div`
  margin: auto;
  width: ${(props) => (props.min ? "40px" : "min-content")};
  height: 50px;
  background-color: #ff0000;
  /* height: 40px; */
  /* width: 40px; */
  @media (max-width: 950px) {
    width: 30px;
    height: 30px;
  }
`;
const Image = styled.div`
  display: flex;
  /* background-color: red; */
  margin-bottom: ${(props) => (props.height ? "8px" : "")};
  @media (max-width: 600px) {
    height: 30px;
    align-items: center;
    img {
      /* height: 2px; */
      width: 18px;
    }
  }
  @media (max-width: 950px) {
    margin-bottom: ${(props) => (props.height ? "4px" : "")};
    img {
      height: 37px;
    }
  }
`;
const CardDashboard = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const iconsrc = require(`../../assets2/DashboardCardIcons/${props.icon}.svg`);
  const keys = useSelector((state) => state.localization.keys);
  const getPercentColor = () => {
    let itemColor = themeKeys.c11;
    if (props.color === "up") {
      itemColor = themeKeys.c1;
    }
    // else if (props.color === "down") {
    //   itemColor = themeKeys.c2;
    // }
  };

  return (
    <Container>
      <IconDiv color={props.color} min={props.min}>
        <Image height={props.minicon}>
          <img src={iconsrc} alt="s" />
        </Image>
        <Text min={props.min}>{keys[props.icontitle]}</Text>
      </IconDiv>
      <Content>
        <Text1>{keys[props.title]}</Text1>
        <Text2>{props.mainvalue}</Text2>
        <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
          {props.arrow === "up" ? (
            <Percentage color={getPercentColor()}>
              <img
                src={ArrowUp}
                alt="a"
                style={{ width: "1.5vw", maxWidth: "13px" }}
              />{" "}
              <Text3>{props.value}</Text3>
            </Percentage>
          ) : props.arrow === "down" ? (
            <Percentage>
              <img
                src={ArrowDown}
                alt="a"
                style={{ width: "1.5vw", maxWidth: "13px" }}
              />
              <Text4 color={themeKeys.c6}>{props.value}</Text4>
            </Percentage>
          ) : (
            <No>{props.arrow}</No>
          )}
          <Text4 color={themeKeys.c6}>{keys[props.date]}</Text4>
        </div>
      </Content>
    </Container>
  );
};

export default CardDashboard;
