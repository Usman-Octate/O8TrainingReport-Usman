import React, { useState } from "react";
import styled from "styled-components";
import TitleOfSection from "../../New-Screens/Components/TitleOfSection";
import { useSelector } from "react-redux";
import AddNotesButton from "../../New-Screens/Components/MantineTable/Buttons/AddNotesButton";
import EditIcon from "../../assets2/CompanySettings/Edit2.svg";
import { MdEdit } from "react-icons/md";


const Wrapper = styled.div``;
const Line2 = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 1px;
`;
const TaxActivation = styled.div``;
const BaseCurr = styled.div`
font-size: 12px;
  font-weight: 700;
  color: #464f60;
  margin: 15px 15px;
  opacity: 0.8;
`;
const Subtext = styled.div`
   font-size: 12px;
  color: #90959f;
  width: 500px;
  font-weight: normal;
  margin-top: 4px;
`;
const Wrap = styled.div`
  margin: 0px 15px;
`;
const Wrap2 = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18.6px;
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
    height: 11px;
    width: 11px;
    left: ${(props) => (props.clicked ? "3.5px" : "26.0px")};
    bottom: 4px;
    background-color: #ffffff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const InputCheck2 = styled.input`
  height: 0px;
  width: 0px;
  opacity: 0;
`;
const Text = styled.div`
  font-size: 12px;
  color: #58606f;
  font-weight: 500;
  width: 150px;
`;
const CompInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Text2 = styled.div`
  font-size: 12px;
  color: #2e90fa;
  font-weight: 400;
`;
const Edit3 = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #eaf3fe;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
`;
const Wrap3 = styled.div`
  margin: 15px 0px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin-bottom: 15px;
`;
const HeadText = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #464f60;
  opacity: 0.5;

  margin: 5px 15px;
`;
const InfoText = styled.text`
  font-size: 12px;
  font-weight: 500;
  color: #464f60;
  opacity: 0.8;
  margin: 5px 15px;
  display: flex;
  
  
  text-align: left;

`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 330px;
  gap: 10px;
  align-items: flex-start;  /* Ensures text starts from top left */
`;

const Section2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330px;
  align-items: flex-start;  /* Ensures text starts from top left */
`;
const Line = styled.div`
  background-color: #7f7f7f;
  width: 100%;
  height: 0.5px;
  opacity: 0.1;
`;
const TaxDetails = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(true);
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const getSpanBg = () => (isChecked ? themeKeys.c6 : themeKeys.c10);
  const getSpanBg2 = () => (isChecked2 ? themeKeys.c6 : themeKeys.c10);
  const getSpanBg3 = () => (isChecked3 ? themeKeys.c6 : themeKeys.c10);
  const HandleOnCheck = () => {
    setIsChecked(!isChecked);
  };
  const HandleOnCheck2 = () => {
    setIsChecked2(!isChecked2);
  };
  const HandleOnCheck3 = () => {
    setIsChecked3(!isChecked3);
  };
  return (
    <Wrapper>
      <div style={{ margin: "15px 0" }}>
        <TitleOfSection title={"TAX FUNCTIONALITY"} />
      </div>
      <Line2 />
      <TaxActivation>
        <BaseCurr>
          ACTIVATE TAXES
          <Subtext>
            Enable the tax functionality tailored to your company's specific
            needs by configuring the software to accommodate your tax
            obligations.
          </Subtext>
        </BaseCurr>

        <Wrap>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              margin: "20px 0",
            }}
          >
            <Text>Activate Corporate Tax</Text>
            <Wrap2>
              <InputCheck2 style={{ cursor: "pointer" }} type="checkbox" />
              <Span2
                bgColor={getSpanBg()}
                clicked={isChecked}
                onClick={HandleOnCheck}
              ></Span2>
            </Wrap2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              margin: "20px 0",
            }}
          >
            <Text>Activate Income Tax</Text>
            <Wrap2>
              <InputCheck2 style={{ cursor: "pointer" }} type="checkbox" />
              <Span2
                bgColor={getSpanBg2()}
                clicked={isChecked2}
                onClick={HandleOnCheck2}
              ></Span2>
            </Wrap2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              margin: "20px 0",
            }}
          >
            <Text>Activate Withholding Tax</Text>
            <Wrap2>
              <InputCheck2 style={{ cursor: "pointer" }} type="checkbox" />
              <Span2
                bgColor={getSpanBg3()}
                clicked={isChecked3}
                onClick={HandleOnCheck3}
              ></Span2>
            </Wrap2>
          </div>
        </Wrap>
      </TaxActivation>
      <CompInfo>
        <Wrap3>
          <TitleOfSection title={"COMPANY INFORMATION"} />
        </Wrap3>
        <AddNotesButton
                    title={"Update Tax Info"}
                    icon={MdEdit}
                    // onClick={openDrawer}
                  />
      </CompInfo>
      <Line2 />
      <BaseCurr>
        COMPANY TAX DETAILS
        <Subtext>
          Provide essential information for tax compliance, including the
          company's Tax Identification Number (TIN), applicable tax rates,
          jurisdictions, and filing frequencies.
        </Subtext>
      </BaseCurr>
      <Details>
        <Section>
          <Section2>
          <HeadText>Company Name</HeadText>
          <InfoText>Company Name</InfoText>
          </Section2>
          <Line/>
          </Section>
          <Section>
            <Section2>
          <HeadText>Business Type</HeadText>
          <InfoText>Business Type</InfoText>
          </Section2>
          <Line/>
          </Section>
          <Section>
            <Section2>
          <HeadText>Industry</HeadText>
          <InfoText>Industry</InfoText>
          </Section2>
          <Line/>
          </Section>
          <Section>
            <Section2>
          <HeadText>Company Start Date</HeadText>
          <InfoText>Company Start Date</InfoText>
          </Section2>
          <Line/>
          </Section>
          <Section>
            <Section2>
          <HeadText>Head Office Location</HeadText>
          <InfoText>Head Office Location</InfoText>
          </Section2>
          {/* <Line/> */}
          </Section>
          
         
          
          
          
  
      </Details>
      <Line2 />
    </Wrapper>
  );
};

export default TaxDetails;
