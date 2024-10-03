import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import TitleOfSection from "../../New-Screens/Components/TitleOfSection";
import { FaRegCircleCheck } from "react-icons/fa6";
import Unlock from "../../assets2/CompanySettings/Unlock.webp";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Line3 = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 1px;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProgressSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px; /* Add some spacing between sections */
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #464f60;
`;

const Highlighted = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #b5b8bf;
`;

const Users = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #7d838f;
`;

const ProgressWrapper = styled.div`
  width: 120px; /* Adjusted to be smaller */
  height: 120px; /* Adjusted to be smaller */
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 15px;
`;
const HeadText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #7d838f;
  margin: 15px 15px;
`;
const Sec2 = styled.div`
  width: 200px;
`;

const Subtext = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 15px;
`;
const Text2 = styled.div`
  font-size: 11px;
  font-weight: normal;
  color: #b5b8bf;
`;
const ListingSection = styled.div`
  display: flex;
  align-items: start;
  gap: 50px;
  margin: 25px 15px;
`;
const SecondSection = styled.div``;
const Title2 = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #2e90fa;
  text-align: center;
  width: 400px;
  margin: 10px 0;
`;
const Text3 = styled.div`
  font-size: 11px;
  font-weight: normal;
  color: #b5b8bf;
  width: 400px;
`;
const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #2e90fa;
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  margin: 15px 0;
`;
const SimpleText = styled.div`
  color: #2e90fa;
  font-weight: normal;
  font-size: 12px;
  margin: 0px 0;
`;
const Utilization = () => {
  const data = [
    {
      completed: 4,
      total: 10,
      title: "User Count",
      highlight: "Registered User",
      space: "4 Users",
      secondlast: "Remaining",
      lastText: "10 Users",
      color: "#34C759",
    },
    {
      completed: 7,
      total: 15,
      title: "Storage Capacity",
      highlight: "Used Storage",
      space: "9GB",
      secondlast: "Free",
      lastText: "16GB",
      color: "#F79E1B",
    },
    {
      completed: 2,
      total: 8,
      title: "File Count",
      highlight: "Attached Files",
      space: "378",
      secondlast: "Total File Size",
      lastText: "8GB",
      color: "#FF3B30",
    },
  ];
  const CoreData = [
    { Name: "Finance" },
    { Name: "Accounting" },
    { Name: "Order Managment" },
    { Name: "Procurment" },
    { Name: "Inventory Management" },
    { Name: "Reports" },
    { Name: "Company Settings" },
  ];
  const BasicData = [
    { Name: "Budgeting" },
    { Name: "Forecasting" },
    { Name: "Cash Flow" },
    { Name: "Bank Reconciliation" },
    { Name: "Fixed Assets" },
    { Name: "Tax Accounting" },
    { Name: "General Ledger" },
  ];
  const unKnownData = [
    { Name: "Accounts Receivables" },
    { Name: "Accounts Payable" },
    { Name: "Multi-Currency" },
    { Name: "Multi-Warehouse" },
    { Name: "Rack Management" },
    { Name: "Multi-UoM" },
  ];
  const onModules = [
    { Name: "CRM" },
    { Name: "HR & Payroll Management" },
    { Name: "Branch Accounting" },
    { Name: "Project & Job Costing" },
    { Name: "Custom Modules" },
    { Name: "Business Intelligence" },
  ];
  const advance = [
    { Name: "Transaction Approvals" },
    { Name: "Advance Custom Fields" },
  ];
  const TalkData = [
    { Name: "CRM" },
    { Name: "HR & Payroll Management" },
    { Name: "Branch Accounting" },
    { Name: "Project & Job Costing" },
    { Name: "Custom Modules" },
    { Name: "Business Intelligence" },
  ];
  const Talk = [
    { Name: "Unlimited Users" },
    { Name: "Expanded Storage Capacity" },
    { Name: "Transaction Approvals" },
  ];
  return (
    <>
      <div style={{ margin: "15px 0" }}>
        <TitleOfSection title={"SYSTEM CURRENCY"} />
      </div>
      <Line3 />
      <Wrapper>
        <div>
          <Wrap>
            {data.map((item, index) => {
              const progressValue = (item.completed / item.total) * 100;

              return (
                <ProgressSection key={index}>
                  <ProgressWrapper>
                    <CircularProgressbar
                      value={progressValue}
                      text={`${item.completed}/${item.total}`}
                      styles={buildStyles({
                        pathColor: item.color, // Green color as in the image
                        textColor: "#464F60", // Darker color for text
                        trailColor: "#E0E0E0", // Light grey trail
                        textSize: "15px", // Adjust text size to match the image
                        strokeLinecap: "round",
                        strokeWidth: "100", // Flat end to the progress bar
                      })}
                    />
                  </ProgressWrapper>
                  <TextSection>
                    <Name>{item.title}</Name>
                    <Highlighted>{item.highlight}</Highlighted>
                    <Users>{item.space}</Users>
                    <Highlighted>{item.secondlast}</Highlighted>
                    <Users>{item.lastText}</Users>
                  </TextSection>
                </ProgressSection>
              );
            })}
          </Wrap>
          <ListingSection>
            <Sec2>
              <HeadText>CORE MODULES</HeadText>
              {CoreData.map((item, index) => {
                return (
                  <Subtext>
                    <FaRegCircleCheck color="#34c759" />
                    <Text2>{item.Name}</Text2>
                  </Subtext>
                );
              })}
            </Sec2>
            <Sec2>
              <HeadText>BASIC FUNCTIONALITY</HeadText>
              {BasicData.map((item, index) => {
                return (
                  <Subtext>
                    <FaRegCircleCheck color="#34c759" />
                    <Text2>{item.Name}</Text2>
                  </Subtext>
                );
              })}
            </Sec2>
            <Sec2>
              <HeadText></HeadText>
              {unKnownData.map((item, index) => {
                return (
                  <Subtext>
                    <FaRegCircleCheck color="#34c759" />
                    <Text2>{item.Name}</Text2>
                  </Subtext>
                );
              })}
            </Sec2>
          </ListingSection>
          <ListingSection>
            <Sec2>
              <HeadText>ADD-ON MODULES</HeadText>
              {onModules.map((item, index) => {
                return (
                  <Subtext>
                    <FaRegCircleCheck color="#a2a7af" />
                    <Text2>{item.Name}</Text2>
                  </Subtext>
                );
              })}
            </Sec2>
            <Sec2>
              <HeadText>ADVANCE FUNCTIONALITY</HeadText>
              {advance.map((item, index) => {
                return (
                  <Subtext>
                    <FaRegCircleCheck color="#a2a7af" />
                    <Text2>{item.Name}</Text2>
                  </Subtext>
                );
              })}
            </Sec2>
          </ListingSection>
        </div>
        <SecondSection>
          <Title2>UNLOCK MORE FEATURES</Title2>

          <img
            src={Unlock}
            style={{ marginLeft: "60px" }}
            width={"250px"}
            height={"250px"}
            alt="dwedwe"
          />

          <Title2>ENTERPRISE</Title2>
          <Text3>
            Elevate your experience by upgrading to our Enterprise plan. Gain
            access to add-on modules, advance features and much more to enhance
            your application’s capabilities.
          </Text3>
          <Title2>Let's Talk</Title2>
          <div style={{ display: "flex", alignItems: "start", gap: "30px" }}>
            <Sec2>
              {TalkData.map((item, index) => {
                return (
                  <Subtext>
                    <FaRegCircleCheck color="#34c759" />
                    <Text2>{item.Name}</Text2>
                  </Subtext>
                );
              })}
            </Sec2>
            <Sec2>
              {Talk.map((item, index) => {
                return (
                  <Subtext>
                    <FaRegCircleCheck color="#34c759" />
                    <Text2>{item.Name}</Text2>
                  </Subtext>
                );
              })}
            </Sec2>
          </div>
          <div
            style={{
              width: "400px",
              textAlign: "center",
              paddingBottom: "40px",
            }}
          >
            <Button>Contact Us</Button>
            <SimpleText>Compare Pricing Plan</SimpleText>
          </div>
        </SecondSection>
      </Wrapper>
    </>
  );
};

export default Utilization;
