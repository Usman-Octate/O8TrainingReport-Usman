import React, { useMemo, useState } from "react";
import styled from "styled-components";
import TitleOfSection from "../../New-Screens/Components/TitleOfSection";
import { BsArrowBarUp } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import EditIcon from "../../assets2/CompanySettings/Edit2.svg";
import HeadlessTable2 from "../../New-Screens/Components/MantineTable/HeadlessTable";
import CardPayment from "../../components/Cards/CardPayment";
import CardLogo from "../../assets2/CompanySettings/MasterCard.svg";
import VisaLogo from "../../assets2/CompanySettings/VisaLogo.svg";
import { FaLastfmSquare } from "react-icons/fa";
import StartupTrial from "../../components/Cards/StartupTrial";
import { useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";

const Wrapper = styled.div``;
const BranchBtn = styled.div`
  background-color: #eaf3fe;
  border-radius: 8px;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 5px;
  padding: 0px 5px;
  height: 27px;
  cursor: pointer;
`;
const Text = styled.div`
  font-size: 12px;
  color: #2e90fa;
`;
const Line3 = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 1px;
`;
const Sec1 = styled.div`
  width: 350px;
`;
const FreeTrial = styled.div`
  display: flex;
  align-items: start;
  gap: 40px;
  background-color: #eaf3fe;
  margin: 20px 0;
  padding: 5px 15px;
  border-radius: 8px;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #34c759;
  margin: 10px 15px;
`;
const Para = styled.div`
  font-size: 12px;
  color: #90959f;
  width: 350px;
  font-weight: normal;
  margin: 10px 15px;
`;

const ParaN = styled.div`
  font-size: 12px;
  color: #90959f;
  width: 600px;
  font-weight: normal;
  margin: 4px 15px 10px 15px;
`;
const Payment = styled.div``;
const Cash = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #464f60;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin: 5px 15px;
`;
const Sign = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #464f60;
`;
const Time = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #90959f;
  text-align: center;
  margin: 0px 15px;
`;
const Btn = styled.button`
  font-size: 13px;
  font-weight: bold;
  color: #7d838f;
  background-color: transparent;
  border: 2px solid #7d838f;
  padding: 10px 60px;
  border-radius: 8px;
  margin: 10px 15px;
  width: 270px;
  cursor: pointer;
`;
const HeadText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #7d838f;
  margin: 15px 15px;
`;
const Sec2 = styled.div``;

const Subtext = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 15px;
`;
const Text2 = styled.div`
  font-size: 11px;
  font-weight: normal;
  color: #90959f;
`;
const StartUp = styled.div`
  display: flex;
  align-items: start;
  gap: 40px;
  margin: 20px 0;
  padding: 5px 15px;
  border-radius: 8px;
`;
const Title3 = styled.div`
  color: #2e90fa;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 15px;
`;
const Sec3 = styled.div`
  width: 350px;
`;
const Per = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #90959f;
`;
const Sec4 = styled.div`
  display: "flex";
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;
`;
const CompInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Wrap3 = styled.div`
  margin: 15px 0px;
`;
const Text4 = styled.div`
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
const Line2 = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 1px;
  margin-bottom: 5px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin-bottom: 15px;
`;
const HeadText2 = styled.div`
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
const Title4 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #464f60;
  margin: 10px 15px 0px 15px;
  opacity: 0.8;
`;
const Title5 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #464f60;
  margin: 5px 0px;
  opacity: 0.8;
`;
const Wrapit = styled.div`
  display: flex;
  align-items: center;
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
const Wrap2 = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18.6px;
`;
const InputCheck2 = styled.input`
  height: 0px;
  width: 0px;
  opacity: 0;
`;
const Grab = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
  margin: 15px;
`;
const BaseCurr = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #464f60;
  margin: 0px 15px;
`;
const Subtext2 = styled.div`
  font-size: 12px;
  color: #90959f;
  width: 500px;
  font-weight: normal;
  margin-top: 4px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 330px;
  gap: 10px;
  align-items: flex-start; /* Ensures text starts from top left */
`;

const Section2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330px;
  align-items: flex-start; /* Ensures text starts from top left */
`;
const Line = styled.div`
  background-color: #7f7f7f;
  width: 100%;
  height: 0.5px;
  opacity: 0.1;
`;

const SectionTable = styled.div`
display: flex;
flex-direction: column;
`;
const Subscription = () => {
  const [internalNotesData, setInternalNotesData] = useState([]);
  const internalNotesColumns = useMemo(
    () => [
      {
        accessorKey: "user",
        header: "Date",
      },
      {
        accessorKey: "date",
        header: "Reference Number",
      },
      {
        accessorKey: "notesDetail",
        header: "Payment Method",
      },
      {
        accessorKey: "notesDetail",
        header: "Amount",
      },
      {
        accessorKey: "notesDetail",
        header: "Status",
      },
      {
        accessorKey: "notesDetail",
        header: "Receipt",
      },
    ],
    []
  );
  const Data = [
    { Name: "Single User" },
    { Name: "Single Company" },
    { Name: "Multi-Currency" },
    { Name: "Multiple Item UoM" },
    { Name: "Multi-Location" },
    { Name: "5GB Storage" },
  ];
  const CardData = [
    {
      Name: "Credit Card",
      img: CardLogo,
      Number: "**** **** **** 0608",
      Date: "Expiry Date: 01/28",
      background: true,
      border: false,
      check: true,
      logo: true,
    },
    {
      Name: "Debit Card",
      img: VisaLogo,
      Number: "**** **** **** 0608",
      Date: "Expiry Date: 01/28",
      background: false,
      border: true,
      check: false,
      logo: true,
    },
    {
      Name: "Online Transfers",
      img: "",
      Number: "**** **** **** 0608",
      Date: "",
      background: false,
      border: true,
      check: false,
      logo: false,
    },
  ];

  const StartupData = [
    {
      title: "STARTUP",
      subtext: "Recommended for Startup Companies.",
      buttonName: "UPGRADE",
    },
    {
      title: "SMALL BUSNIESS",
      subtext:
        "This plan offers a suite of essential tools, including financial management, inventory tracking, and customer relationship management, tailored to meet the needs of growing companies.",
      buttonName: "UPGRADE",
    },
    {
      title: "ENTERPRISE",
      subtext:
        "This plan offers a suite of essential tools, including financial management, inventory tracking, and customer relationship management, tailored to meet the needs of growing companies.",
      buttonName: "CONTACT OUR SALES",
    },
  ];
  const [isChecked3, setIsChecked3] = useState(true);
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const getSpanBg3 = () => (isChecked3 ? themeKeys.c6 : themeKeys.c10);
  const HandleOnCheck3 = () => {
    setIsChecked3(!isChecked3);
  };
  return (
    <Wrapper>
      <div
        style={{
          margin: "15px 0",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <TitleOfSection title={"SUBSCRIPTION PLAN"} />
        <BranchBtn>
          <BsArrowBarUp color="#2E90FA" />
          <Text>Upgrade Plan</Text>
        </BranchBtn>
      </div>
      <Line3 />
      <FreeTrial>
        <Sec1>
          <Title>FREE TRIAL</Title>

          <Para>
            Experience a 30-day complimentary trial to explore the full range of
            Octate modules and functionalities.
          </Para>
          <Payment>
            <Cash>
              <Sign>$</Sign>0
            </Cash>
          </Payment>
          <Time>30 Days Free Trial</Time>
          <div style={{ width: "350px", textAlign: "center" }}>
            <Btn>INVITE YOUR TEAM</Btn>
          </div>
        </Sec1>
        <Sec2>
          <HeadText>Available features on free trial</HeadText>
          {Data.map((item, index) => {
            return (
              <Subtext>
                <FaRegCircleCheck color="#34c759" />
                <Text2>{item.Name}</Text2>
              </Subtext>
            );
          })}
        </Sec2>
      </FreeTrial>
      {StartupData.map((item, intex) => {
        return (
          <StartupTrial
            title={item.title}
            subText={item.subtext}
            buttonName={item.buttonName}
          />
        );
      })}
      <Sec4>
        <CompInfo>
          <Wrap3>
            <TitleOfSection title={"BILLING INFORMATION"} />
          </Wrap3>
          <Edit3>
            <img
              src={EditIcon}
              style={{ height: "13px", width: "13px" }}
              alt="Edit"
            />
            <Text4>Update Billing Contact</Text4>
          </Edit3>
        </CompInfo>

        <Line2 />
        <Title4>BILLING CONTACT</Title4>
        <ParaN>
          Below contact will receive all notifications related to your
          subscription and billing. This ensures that any important updates or
          issues regarding your charges are promptly communicated. Your
          information will be kept confidential and used solely for billing
          purposes.
        </ParaN>
      </Sec4>
      <Details>
        <Section>
          <Section2>
            <HeadText2>First Name</HeadText2>
            <InfoText>Company Name</InfoText>
          </Section2>
          <Line />
        </Section>
        <Section>
          <Section2>
            <HeadText2>Last Type</HeadText2>
            <InfoText>Business Type</InfoText>
          </Section2>
          <Line />
        </Section>

        <Section>
          <Section2>
            <HeadText2>Address</HeadText2>
            <InfoText>Industry</InfoText>
          </Section2>
          <Line />
        </Section>
        <Section>
          <Section2>
            <HeadText2>Email Address</HeadText2>
            <InfoText>Company Start Date</InfoText>
          </Section2>
          <Line />
        </Section>

        <Section>
          <Section2>
            <HeadText2>Phone Number</HeadText2>
            <InfoText>Head Office Location</InfoText>
          </Section2>
          <Line />
        </Section>
      </Details>
      
      <Sec4>
        <CompInfo>
          <Wrap3>
            <TitleOfSection title={"BILLING DETAILS"} />
          </Wrap3>
          <Edit3>
            <img
              src={EditIcon}
              style={{ height: "13px", width: "13px" }}
              alt="Edit"
            />
            <Text4>Update Cycle</Text4>
          </Edit3>
        </CompInfo>
        <Line2 />
        <Title4>BILLING CYCLE</Title4>
        <ParaN>
        The billing cycle defines the period for which your subscription charges
        are applied, typically on a monthly or annual basis. Charges will be
        automatically processed at the end of each cycle, and you will receive
        notifications regarding each transaction. Your billing history on below
        table.
      </ParaN>
      </Sec4>
      
      <Details>
        <Section>
          <Section2>
            <HeadText2>Billing Cycle</HeadText2>
            <InfoText>Company Name</InfoText>
          </Section2>
          <Line />
        </Section>
        <Section>
          <Section2>
            <HeadText2>Next Billing Cycle</HeadText2>
            <InfoText>Business Type</InfoText>
          </Section2>
          <Line />
        </Section>
      </Details>

   
      
      <HeadlessTable2
        columns={internalNotesColumns}
        data={internalNotesData}
        TitleButton={false}
        showBranchButton={false}
        rowSelection={false}
        CustomButtons={false}
        showSimpleText={true}
        SimpleText={"BILLING HISTORY"}
      />
     
      <CompInfo>
        <Wrap3>
          <TitleOfSection title={"PAYMENT METHOD"} />
        </Wrap3>
        <Edit3>
          <img
            src={EditIcon}
            style={{ height: "13px", width: "13px" }}
            alt="Edit"
          />
          <Text4>Update Payment Method</Text4>
        </Edit3>
      </CompInfo>
      <Line2 />
      <Wrapit>
        {CardData.map((item, index) => {
          return (
            <CardPayment
              key={index}
              CardType={item.Name}
              CardNumber={item.Number}
              CardDate={item.Date}
              Image={item.img}
              CheckIcon={item.check}
              background={item.background}
              Border={item.border}
              Logo={item.logo}
            />
          );
        })}
      </Wrapit>
      <Grab>
        <Wrap2>
          <InputCheck2 style={{ cursor: "pointer" }} type="checkbox" />
          <Span2
            bgColor={getSpanBg3()}
            clicked={isChecked3}
            onClick={HandleOnCheck3}
          ></Span2>
        </Wrap2>
        <BaseCurr>
        <Title5>
          Enable Auto Renew
          </Title5>
          <Subtext2>
            If enabled, this option will automatically renew your product
            subscription on a monthly basis. Should the plan expire, your
            company will only have view-mode access, which may restrict your
            ability to enter or modify data.
          </Subtext2>
        </BaseCurr>
      </Grab>
    </Wrapper>
  );
};

export default Subscription;
