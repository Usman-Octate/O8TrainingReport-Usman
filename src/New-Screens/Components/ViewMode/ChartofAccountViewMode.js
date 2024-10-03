import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ThreeCardsComponents from "../ThreeCardsComponents";
import LargeButton from "../../../components/buttons/LargeButton";
import DropdownInputAccountCode from "../../../components/Inputs/DropdownInputAccountCode";
import DropdownInputAccountCodeView from "../../../components/Inputs/DropdownInputCodeView";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
// Container for the whole component
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* background-color: green; */
  gap: 30px;
  width: 42vw;
  //   border: 1px solid #ddd;
`;

// Container for the left-side content
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 285px;

  margin-left: 5px;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 300px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  /* background-color: red; */
  align-items: center;
  /* width: 300px; */
`;
// Container for the text and tags in the first div
const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CodeText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: rgba(70, 79, 96, 0.8);
`;

const BankText = styled.div`
  font-size: 18px;
  color: #464f60;
  font-weight: bold;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background-color: ${(props) => props.color};
  color: white;
  padding: 1px 10px;
  border-radius: 8px;
  font-size: 12px;
`;

const StatusText = styled.div`
  font-size: 14px;
  color: green;
  margin-left: 10px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
`;
const CustomFieldsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background-color: red; */
  min-width: 200px;
`;
// Container for the text and categories in the second div
const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* width: 300px;  */
`;

const Heading = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: rgba(70, 79, 96, 0.9);
`;
const Heading2 = styled.div`
  font-size: 12px;
  width: 13rem;
  font-weight: bold;
  color: rgba(70, 79, 96, 0.9);
  cursor: pointer;
  display: flex;
`;
const InfoText = styled.div`
  font-size: 14px;
  color: #555;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: start;
  /* background-color: green; */
  //   gap: 10px;
  /* justify-content: space-between; */
`;
const InfoTextHeading = styled.div`
  font-size: 14px;
  color: #555;
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 130px;
  /* background-color: green; */
  //   gap: 10px;
  /* justify-content: space-between; */
`;
// Container for the text and checkbox in the third div
const ThirdDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* width: 300px;  */
  height: 59px;
  /* background-color: red; */
  padding-top: 6px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  /* margin-right: 10px; */
  /* height: 15px; */
  /* width: 15px; */
  border-radius: 8px;
  display: flex;
  height: 17px;
  padding: 0;
  margin: 0;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  /* background-color: red; */

  /* gap: 10px; */
`;
const SmText = styled.div`
  font-size: 12px;
  color: rgba(70, 79, 96, 0.6);
  height: 17px;
`;
const SmText8 = styled.div`
  font-size: 12px;
  color: rgba(70, 79, 96, 0.6);
  display: ${(props) => (props.HideInfo ? "block" : "none")};
  height: 17px;
`;
const SmTextDark = styled.div`
  font-size: 12px;
  color: rgba(70, 79, 96, 0.75);
  font-weight: 500;
  height: 17px;
`;
const MinDiv = styled.div`
  display: flex;
  gap: 40px;
  /* margin-left: 5px; */
  /* background-color: red; */
`;
const MinDivCustom = styled.div`
  display: flex;
  gap: 40px;
  margin-left: 5px;
  /* background-color: red; */
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 0;
  gap: 6px;
  /* background-color: red; */
  /* @media (min-width: 1600px) {
    flex-direction: row;
    gap: 30px;
  } */
`;
const TitleDrop = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  margin-left: 7px;
`;
const DropButton = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  display: flex;
  padding: 10px;
  cursor: pointer;
  width: fit-content;
  min-width: 4.2rem;
  /* margin: 15px 0px; */
  transition: background-color 0.5s ease; /* Smooth transition */

  &:hover {
    background-color: ${(props) =>
      darkenColor(props.color, 0.1)}; /* Darken color on hover */
  }
`;
const Line = styled.div`
  background-color: #e0e0e0;
  height: 0.5px;
  width: 79.5vw;
  margin: 6px 0 0 0;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;
const FirstSection = styled.div`
  display: flex;
`;
const InputCheckOne2 = styled.input`
  height: 18px;
  width: 18px;
`;
const Wrap2 = styled.div`
  position: relative;
  display: inline-block;
  width: 30px; /* Reduced width */
  height: 15px; /* Reduced height */
`;

const InputCheck2 = styled.input`
  height: 0px;
  width: 0px;
  opacity: 0;
`;

const Span2 = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.bgColor};
  transition: 0.4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: "";
    height: 10px; /* Reduced height */
    width: 10px; /* Reduced width */
    left: ${(props) =>
      props.clicked ? "17.5px" : "2px"}; /* Adjusted left position */
    bottom: 3px; /* Adjusted bottom position */
    background-color: #ffffff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const darkenColor = (color, percent, filterName) => {
  // Convert hex to RGB
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);

  // Adjust color
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));

  // Convert back to hex
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};
// {accountCode: '1000', accountName: 'HSBC Account', accountType: 'Other Assets', currency: 'USD', balance: '0',category
//     :
//     "Equity"
//     currency
//     :
//     "USD"
//     currencyId
//     :
//     null
//     department
//     :
//     "Expenses"
//     description
//     :
//     null
//     division
//     :
//     "Revenue"
//     enableCostCenter
//     :
//     false
//     id
//     :
//     2553
//     isSubAccount
//     :
//     true
//     parentAccount
//     :
//     "Expenses"
//     project
//     :
//     "Expenses"
//     status
//     :
//     null}

const ChartofAccountViewMode = ({
  selectedData,
  Data,
  dropdownData,
  Data2,
  costCenterData,
  handleCurrentDataUpdate,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [accountCode, setAccountCode] = useState(selectedData.accountCode);
  const [currentData, setCurrentData] = useState(selectedData);
  const [customFields, setCustomFields] = useState(true);
  const [isCheck, setIsCheck] = useState(selectedData.enableCostCenter);

  const HandleEnableCheck = () => {
    setIsCheck((prev) => !prev);
  };

  const AccountCodeValue = (e) => {
    console.log("Selected Account Code:", e);
    setAccountCode(e);

    if (Data && Array.isArray(Data)) {
      console.log(Data);
      const matchedData = Data.find((item) => item.accountCode === e.value);
      console.log(matchedData, "MATCH");
      if (matchedData) {
        console.log(matchedData, "MATCH");
        setCurrentData(matchedData);
        handleCurrentDataUpdate(matchedData);
      }
    } else {
      console.error("rowData is undefined or not an array");
    }
  };

  const truncateText = (text) => {
    const maxLength = 28;
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  console.log(Data, "cewec");

  console.log(currentData, "erwerwefrwe");

  const getSpanBg = () => (toggle ? themeKeys.c10 : themeKeys.c6);

  const [toggle, setToggle] = useState(false);

  const HandleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (currentData) {
      setToggle(currentData.enableCostCenter); // Update toggle based on current data
    }
  }, [currentData]);

  console.log(currentData.currencies, "CURRENY");

  // const [currency, setCurrency] = useState(selectedData.currency || []);
  return (
    <Main>
      <FirstSection>
        <Container>
          <LeftContainer>
            <Div>
              <FirstDiv>
                {/* <CodeText>{selectedData.accountCode}</CodeText> */}
                <DropdownInputAccountCodeView
                  Name={"Account Code"}
                  Padding={false}
                  setWidth={false}
                  onChange={AccountCodeValue}
                  value={accountCode}
                  Data={dropdownData}
                  Data2={Data2}
                />
                <Tooltip title={currentData.accountName} arrow>
                  <BankText>{truncateText(currentData.accountName)}</BankText>
                </Tooltip>
                <TagContainer>
                  {currentData.currencies?.map((res, index) => {
                    return (
                      <Tag key={index} color={themeKeys.primary}>
                        {res}
                      </Tag>
                    );
                  })}

                  {/* <Tag>PKR</Tag> */}
                  {/* <Tag>AUD</Tag> */}
                  {/* / */}
                </TagContainer>
              </FirstDiv>
            </Div>
            {/* Second Div */}
            <SecondDiv>
              <Heading>TYPES & CATEGORY</Heading>
              <MinDiv>
                <InfoTextHeading>
                  <SmTextDark>Account Category</SmTextDark>
                  <SmTextDark>Account Type</SmTextDark>
                </InfoTextHeading>
                <InfoText>
                  <SmText>
                    {currentData.category ? currentData.category : "-"}
                  </SmText>
                  <SmText>
                    {currentData.accountType ? currentData.accountType : "-"}
                  </SmText>
                </InfoText>
              </MinDiv>
            </SecondDiv>

            {/* Third Div */}
            <Section>
              <Heading>ACCOUNT STRUCTURE</Heading>
              <MinDiv>
                <InfoTextHeading>
                  <SmTextDark>Is Title Account?</SmTextDark>
                  <SmTextDark>Is Sub Account?</SmTextDark>
                  <SmTextDark>Parent Account</SmTextDark>
                </InfoTextHeading>
                <InfoText>
                  <Checkbox checked={currentData.isMainAccount} />
                  <Checkbox checked={currentData.isSubAccount} />
                  <SmText>
                    {currentData.parentAccount
                      ? currentData.parentAccount
                      : "-"}
                  </SmText>
                </InfoText>
              </MinDiv>
            </Section>
          </LeftContainer>
          <MiddleContainer>
            <ThirdDiv>
              <Heading>BUDGET</Heading>
              <MinDiv>
                {" "}
                <InfoTextHeading>
                  <SmTextDark>Includes on Budget</SmTextDark>
                </InfoTextHeading>
                <InfoText>
                  <Checkbox checked={currentData.allowBudget} />
                </InfoText>
              </MinDiv>
            </ThirdDiv>
            <Section>
              <Heading>COST CENTER</Heading>
              <MinDiv>
                <InfoTextHeading>
                  <SmTextDark>Enable Cost Center</SmTextDark>
                  {/* <SmTextDark>Division</SmTextDark>
                  <SmTextDark>Department</SmTextDark>
                  <SmTextDark>Project</SmTextDark> */}
                  {toggle
                    ? costCenterData
                        .filter((res) => res.status)
                        .map((res) => {
                          return (
                            <SmTextDark key={res.id}>{res.segment}</SmTextDark>
                          );
                        })
                    : null}
                </InfoTextHeading>
                <InfoText>
                  {/* <SmTextDark>{selectedData.enableCostCenter}</SmTextDark> */}
                  <div style={{ height: "17px" }}>
                    <Wrap2>
                      <InputCheck2
                        style={{ cursor: "pointer" }}
                        type="checkbox"
                      />
                      <Span2 bgColor={getSpanBg()} clicked={toggle}></Span2>
                    </Wrap2>
                  </div>
                  <SmText8 HideInfo={toggle}>
                    {selectedData.division ? selectedData.division : "-"}
                  </SmText8>
                  <SmText8 HideInfo={toggle}>
                    {selectedData.department ? selectedData.department : "-"}
                  </SmText8>
                  <SmText8 HideInfo={toggle}>
                    {selectedData.project ? selectedData.project : "-"}
                  </SmText8>
                  <SmText8 HideInfo={toggle}>
                    {selectedData.segment4 ? selectedData.project : "-"}
                  </SmText8>
                  <SmText8 HideInfo={toggle}>
                    {selectedData.segment5 ? selectedData.project : "-"}
                  </SmText8>
                </InfoText>
              </MinDiv>
            </Section>
          </MiddleContainer>
          {/* <MiddleContainer></MiddleContainer> */}
        </Container>
        <CardContainer>
          <LargeButton name={"Active"} />
          <ThreeCardsComponents />
        </CardContainer>
      </FirstSection>
      <RightContainer>
        <CustomFieldsDiv>
          {/* <Heading2 onClick={() => setCustomFields(!customFields)}>
              {customFields ? (
                <div style={{ marginRight: 5 }}>
                  <FaAngleDown size={15} />
                </div>
              ) : (
                <div style={{ marginRight: 5 }}>
                  <FaAngleRight size={15} />
                </div>
              )}
              CUSTOM FILEDS
            </Heading2> */}
          <DropButton
            onClick={() => setCustomFields(!customFields)}
            color={themeKeys.primary}
          >
            {customFields ? (
              <FaAngleDown style={{ fontSize: "13px", color: "white" }} />
            ) : (
              <FaAngleRight style={{ fontSize: "13px", color: "white" }} />
            )}
            <TitleDrop txtColor={"#fff"}>CUSTOM FIELDS</TitleDrop>
          </DropButton>
          {customFields ? (
            <MinDivCustom>
              <InfoTextHeading>
                <SmTextDark>Custom Field 1</SmTextDark>
                <SmTextDark>Custom Field 1</SmTextDark>
                <SmTextDark>Custom Field 1</SmTextDark>{" "}
                <SmTextDark>Custom Field 1</SmTextDark>
                <SmTextDark>Custom Field 1</SmTextDark>
              </InfoTextHeading>
              <InfoText>
                <SmText>Custom Field 2</SmText>
                <SmText>Custom Field 2</SmText>
                <SmText>Custom Field 2</SmText>
                <SmText>Custom Field 2</SmText>
                <SmText>Custom Field 2</SmText>
              </InfoText>
            </MinDivCustom>
          ) : null}
          <Line />
        </CustomFieldsDiv>
      </RightContainer>
    </Main>
  );
};

export default ChartofAccountViewMode;
