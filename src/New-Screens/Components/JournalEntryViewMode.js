import React from "react";
import styled from "styled-components";
import LargeButton from "../../components/buttons/LargeButton";
import Currency from "../../components/buttons/CurrencyCell";

// Container for the entire component

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  padding: 10px 5px 10px 5px;
`;

// Left Container
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 230px; // Adjust as needed
`;

// Section styled components
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
`;

const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  opacity: 0.9;
  color: #464f60;
`;

const InfoText = styled.div`
  color: #555;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
 background-color: #007bff;
  color: white;
  padding: 1px 10px;
  border-radius: 8px;
  font-size: 12px;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 230px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: auto 0px;
  padding-right: 20px;
  width: 260px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
`;

const TopEC = styled.div`
  display: flex;
  justify-content: space-between;
`;

const JEContainer = styled.div`
  display: flex;
`;

const CurrencyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const NoContainer = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #464f60;
`;

const CurrencyValue = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #464f60;
  opacity: 0.9;
`;

const CurrencyFF = styled.div`
  font-size: 12px;
  color: #464f60;
  font-weight: 500;
  opacity: 0.5;
`;

const DisText = styled.div`
  font-size: 12px;
  color: #464f60;
  font-weight: 400;
  opacity: 0.6;
  width: 230px;
  word-wrap: break-word;
  white-space: normal;   
`;
const InfoLeft = styled.div`
  font-size: 12px;
  color: rgba(70, 79, 96, 0.75);
  font-weight: 500;
  /* opacity: 0.6; */
`;

const InfoRight = styled.div`
  font-size: 12px;
  color: rgba(70, 79, 96, 0.6);
  font-weight: 400;
  /* opacity: 0.75; */
`;

const TopContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  gap: 30px;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  gap: 30px;
`;

const CombineSection = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`;
const MainContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
`;

const JournalEntryViewMode = ({
  journalEntryNo,
  currencyData,
  tags,
  descriptionText,
  extraReferenceNumber,
  transactionDate,
  postingDate,
  dueDate,
  autoReversalDate,
  reverseJournalEntry,
  recurTransaction,
  recurrenceFrequency,
  recurrenceInterval,
  nextRecurrenceDate,
  division,
  department,
  project,
  customField1,
  customField2,
  customField3,
  customField4,
  customField5,
  currencyDataA,
  code,
  fullform,
  symbol,
  amount,
}) => {
  return (
    <MainContainer>
    <Container>
      <TopContainer>
        <CombineSection>
        <Section>
          <TopEC>
            <JEContainer>
              <NoContainer>{journalEntryNo}</NoContainer>
            </JEContainer>
            <CurrencyContainer>

              <Currency code={code} fullForm={fullform}  symbol={symbol} amount={amount} />
         
            </CurrencyContainer>
          </TopEC>
          <TagsContainer>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
        </Section>

        <Section>
          <DisText>{descriptionText}</DisText>
        </Section>
        </CombineSection>
        <Section>
          <SectionTitle>AUTO REVERSAL</SectionTitle>
          <CheckBoxContainer>
            <InfoLeft>Reverse Journal Entry</InfoLeft>
            <CheckBox checked={reverseJournalEntry} />
          </CheckBoxContainer>
          <InfoText>
            <InfoLeft>Auto Reversal Date</InfoLeft>
            <InfoRight>{autoReversalDate}</InfoRight>
          </InfoText>
        </Section>
        <Section>
          <SectionTitle>COST CENTER</SectionTitle>
          <InfoText>
            <InfoLeft>Division</InfoLeft>
            <InfoRight>{division}</InfoRight>
          </InfoText>
          <InfoText>
            <InfoLeft>Department</InfoLeft>
            <InfoRight>{department}</InfoRight>
          </InfoText>
          <InfoText>
            <InfoLeft>Project</InfoLeft>
            <InfoRight>{project}</InfoRight>
          </InfoText>
        </Section>
      </TopContainer>
      <BottomContainer>
        <CombineSection>
        <Section>
          <InfoText>
            <InfoLeft>Extra Reference Number</InfoLeft>
            <InfoRight>{extraReferenceNumber}</InfoRight>
          </InfoText>
        </Section>
        <Section>
          <SectionTitle>DATES</SectionTitle>
          <InfoText>
            <InfoLeft>Transaction Date</InfoLeft>
            <InfoRight>{transactionDate}</InfoRight>
          </InfoText>
          <InfoText>
            <InfoLeft>Posting Date</InfoLeft>
            <InfoRight>{postingDate}</InfoRight>
          </InfoText>
          <InfoText>
            <InfoLeft>Due Date</InfoLeft>
            <InfoRight>{dueDate}</InfoRight>
          </InfoText>
        </Section>
        </CombineSection>
        <Section>
          <SectionTitle>RECURRENCE</SectionTitle>
          <CheckBoxContainer>
            <InfoLeft>Recur Transaction</InfoLeft>
            <CheckBox checked={recurTransaction} />
          </CheckBoxContainer>
          <InfoText>
            <InfoLeft>Frequency</InfoLeft>
            <InfoRight>{recurrenceFrequency}</InfoRight>
          </InfoText>
          <InfoText>
            <InfoLeft>Interval</InfoLeft>
            <InfoRight>{recurrenceInterval}</InfoRight>
          </InfoText>
          <InfoText>
            <InfoLeft>Next Recurrence Date</InfoLeft>
            <InfoRight>{nextRecurrenceDate}</InfoRight>
          </InfoText>
        </Section>
        <Section>
          <SectionTitle>CUSTOM FIELDS</SectionTitle>
          <InfoText>
            <InfoLeft>Custom Field 1</InfoLeft>
            <InfoRight>{customField1}</InfoRight>
          </InfoText>
          <InfoText>
            <InfoLeft>Custom Field 2</InfoLeft>
            <InfoRight>{customField2}</InfoRight>
          </InfoText>
          <InfoText>
            <InfoLeft>Custom Field 3</InfoLeft>
            <InfoRight>{customField3}</InfoRight>
          </InfoText>
          
        </Section>
      </BottomContainer>

     

     
    </Container>
     <StatusContainer>
     <LargeButton font={"18px"} name={"Pending For Approval"} />
   </StatusContainer>
   </MainContainer>
  );
};

export default JournalEntryViewMode;
