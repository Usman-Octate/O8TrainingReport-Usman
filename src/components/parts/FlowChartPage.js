import { useState } from "react";
import styled from "styled-components";
import StatusButton from "../buttons/StatusButton";
import UpDownIcon from "../buttons/UpDownIcon";
import DropDownButton from "../buttons/DropDownButton";

import DropCloseIcon from "../buttons/DropCloseIcon";

const FlowChartPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [isDrop, setIsDrop] = useState(-1);

  const HandleOnClick = (index) => {
    setIsDrop(index);
  };

  //   Chart of Account Lists Data

  const [data, setData] = useState([
    {
      id: 1,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Cash Account",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      number2: "NO",
      updown2: <UpDownIcon />,
      dropdown2: <DropDownButton />,
      code2: "Account Code",
      description2: "Account Description",
      status2: "Status",
      category2: "Category",
      type: "Account Type",
      balance2: "Balance",
      balanceFc2: "Balance FC",
      project2: "Project",
    },
  ]);

  // Accounts Detailed Data

  const AccountData = [
    {
      id: 1,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 2,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 3,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 4,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 5,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 6,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 7,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 8,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 9,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 10,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 11,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
  ];

  const DropdownData = [
    {
      id: 1,
      code: "10010",
      description: "Current Asset",
      status: <StatusButton />,
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",
    },
  ];

  //   CheckBox Function

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Wrapper>
      {Data.map((item, index) => {
        return (
          <>
            <Head key={index}>
              <SubText
                type="CheckBox"
                cheaked={isChecked}
                onChange={handleCheckBoxChange}
              ></SubText>
              <Text1>
                {item.number2}
                {item.updown2}
              </Text1>
              <Text2>
                {item.dropdown2}
                {item.code2}
                {item.updown2}
              </Text2>
              <Text3>{item.description2}</Text3>
              <Text4>{item.status2}</Text4>
              <Text5>{item.category2}</Text5>
              <Text6>{item.type}</Text6>
              <Text7>{item.balance2}</Text7>
              <Text8>{item.balanceFc2}</Text8>
              <Text9>{item.project2}</Text9>
            </Head>
          </>
        );
      })}
      <WrapperList>
        {AccountData.map((itemData, i) => {
          return (
            <Grab>
              <SubHeading key={i}>
                <SubText
                  type="CheckBox"
                  cheaked={isChecked}
                  onChange={handleCheckBoxChange}
                ></SubText>
                <SubText1>{itemData.id}</SubText1>
                <SubText2
                  onClick={() => HandleOnClick(i)}
                  isDropdownOpen={isDrop === i}
                >
                  {isDrop === i ? <DropDownButton /> : <DropCloseIcon />}
                  {itemData.code}
                </SubText2>
                <SubText3>{itemData.description}</SubText3>
                <SubText4>{itemData.status}</SubText4>
                <SubText8>{itemData.category}</SubText8>
                <SubText9>{itemData.project}</SubText9>
                <SubText5>{itemData.balance}</SubText5>
                <SubText6>{itemData.balanceFc}</SubText6>
                <SubText7>{itemData.project}</SubText7>
              </SubHeading>
              {isDrop === i &&
                DropdownData.map((item, index) => {
                  return (
                    <SubHeading2 key={index}>
                      <SubText
                        type="CheckBox"
                        cheaked={isChecked}
                        onChange={handleCheckBoxChange}
                      ></SubText>
                      <SubText1>{item.id}</SubText1>
                      <SubText2>
                        {item.dropdown2}
                        {item.code}
                      </SubText2>
                      <SubText3>{item.description}</SubText3>
                      <SubText4>{item.status}</SubText4>
                      <SubText8>{item.category}</SubText8>
                      <SubText9>{item.project}</SubText9>
                      <SubText5>{item.balance}</SubText5>
                      <SubText6>{item.balanceFc}</SubText6>
                      <SubText7>{item.project}</SubText7>
                    </SubHeading2>
                  );
                })}
            </Grab>
          );
        })}
      </WrapperList>
    </Wrapper>
  );
};

export default FlowChartPage;

const WrapperList = styled.div`
  overflow-y: auto;
  height: 80vh;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-width: 70rem;
`;
const Grab = styled.div`
  border: 0.1px solid #464f601a;
`;
const Text = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #eef5ff;
  border-radius: 5px 5px 0px 0px;
  /* @media (max-width: 1200px) {
    gap: 30px;
  } */
`;
const SubHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  color: #464f60;
  padding: 3px 0px;
  width: 100%;
`;

const SubText1 = styled.div`
  margin-left: 2.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 50px;
`;
const SubText2 = styled.div`
  margin-left: 3.1rem;
  font-size: 1em;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  width: 110px;
  cursor: pointer;
`;
const SubText3 = styled.div`
  margin-left: 3rem;
  font-size: 1em;
  text-align: center;
  font-weight: 600;
  color: #464f60cc;
  width: 130px;
`;
const SubText4 = styled.div`
  margin-left: 2rem;
  font-size: 1em;
  text-align: center;
  color: #464f60cc;
`;
const SubText5 = styled.div`
  margin-left: 0.5rem;
  font-size: 1em;
  text-align: center;
  font-weight: 600;
  width: 90px;
`;
const SubText6 = styled.div`
  margin-left: 1rem;
  font-size: 1em;
  text-align: center;
  font-weight: 600;

  width: 90px;
`;
const SubText7 = styled.div`
  margin-left: 0.1rem;
  font-size: 1em;
  text-align: center;
  color: #464f60cc;

  width: 120px;
`;
const SubText8 = styled.div`
  margin-left: 1.4rem;
  font-size: 1em;
  text-align: center;
  color: #464f60cc;

  width: 80px;
`;
const SubText9 = styled.div`
  margin-left: 1.2rem;
  font-size: 1em;
  text-align: center;
  color: #464f60cc;

  width: 120px;
`;

const SubText = styled.input`
  width: 16px;
  height: 16px;
  margin-left: 1rem;
  cursor: pointer;

  &:cheaked {
    background-color: #800080;
    border-color: #800080;
  }
`;
const SubHeading2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  color: #464f60;
  padding: 10px 0px;
  width: 100%;
  border-top: 0.5px solid #464f601a;
`;
const Img = styled.div`
  margin-top: 7px;
`;
const Text1 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 3.2rem;
  cursor: pointer;
`;
const Text2 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  cursor: pointer;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 3.7rem;
`;
const Text3 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 3.3rem;
`;
const Text4 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 3.5rem;
`;
const Text5 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 3.3rem;
`;
const Text6 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 3.7rem;
`;
const Text7 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 3.3rem;
`;
const Text8 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 3.5rem;
`;
const Text9 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 3.4rem;
`;
