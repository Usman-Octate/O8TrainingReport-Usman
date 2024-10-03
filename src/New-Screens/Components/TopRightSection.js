import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../components/parts/Card";
import ActiveIcon from "../../assets2/ChartOfAccountNew/Active.svg";
import LargeButton from "../../components/buttons/LargeButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
  gap: 15px;
  @media (max-width: 600px) {
  }
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopRightSection = () => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const keys = useSelector((state) => state.localization.keys);

  return (
    <>
      <LargeButton name={"Active"} />
      <Wrapper>
        <Card
          icon="CurrentMonth"
          icontitle={keys.KEY100255}
          title={keys.KEY100255}
          number="364k"
          Background={themeKeys.c7}
        />
        <Card
          icon="LastMonth"
          icontitle={keys.KEY100256}
          title={keys.KEY100256}
          number="278k"
          Background={themeKeys.c8}
        />
        <Card
          icon="YearToDate"
          icontitle={keys.KEY100256}
          title={keys.KEY100257}
          number="1.59m"
          Background={themeKeys.c9}
        />
      </Wrapper>
    </>
  );
};

export default TopRightSection;
