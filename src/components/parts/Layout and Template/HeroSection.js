import React from "react";
import styled from "styled-components";

import ScreensLayout from "./ScreensLayout";

import FormsLayout from "./FormsLayout";
import ReportsLayout from "./ReportsLayout";
import EmailTemp from "./EmailTemp";
import Activity from "./Activity";

const Wrapper = styled.div`
  width: 97%;
  margin-left: 2rem;
  /* margin-top: 3.5rem; */

  /* background-color: green; */
  @media (max-height: 900px) {
    margin-left: 1rem;
  }
`;
const Div1 = styled.div``;
const HeroSection = ({
  themeColor,
  data,
  payment,
  credit,
  invoice,
  customer,
  delivery,
  qoutes,
  Data,
  defaultData,
  activity,
}) => {
  return (
    <Wrapper>
      {/* Tables */}
      <Div1>
        {" "}
        <ScreensLayout
          TextColor={themeColor}
          data={data}
          payment={payment}
          credit={credit}
          invoice={invoice}
          customer={customer}
          delivery={delivery}
          qoutes={qoutes}
          Data={Data}
          defaultData={defaultData}
        />
      </Div1>
      <Div1>
        <FormsLayout
          TextColor={themeColor}
          data={data}
          payment={payment}
          credit={credit}
          invoice={invoice}
          customer={customer}
          delivery={delivery}
          qoutes={qoutes}
          Data={Data}
          defaultData={defaultData}
        />
      </Div1>
      <Div1>
        <ReportsLayout
          TextColor={themeColor}
          data={data}
          payment={payment}
          credit={credit}
          invoice={invoice}
          customer={customer}
          delivery={delivery}
          qoutes={qoutes}
          Data={Data}
          defaultData={defaultData}
        />
      </Div1>
      <Div1>
        <EmailTemp
          TextColor={themeColor}
          data={data}
          payment={payment}
          credit={credit}
          invoice={invoice}
          customer={customer}
          delivery={delivery}
          qoutes={qoutes}
          Data={Data}
          defaultData={defaultData}
        />
      </Div1>
      <Div1>
        <Activity
          TextColor={themeColor}
          data={data}
          payment={payment}
          credit={credit}
          invoice={invoice}
          customer={customer}
          delivery={delivery}
          qoutes={qoutes}
          Data={Data}
          defaultData={defaultData}
          activity={activity}
        />
      </Div1>
    </Wrapper>
  );
};

export default HeroSection;
