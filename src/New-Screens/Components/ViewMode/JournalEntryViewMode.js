import React from "react";
import styled from "styled-components";
import LargeButton from "../../components/buttons/LargeButton";

// Container for the entire component
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`;

// Left Container
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px; // Adjust as needed
`;

// Section styled components
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const InfoText = styled.div`
  font-size: 16px;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.div`
  background-color: #007bff; // Blue background
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px; // Adjust as needed
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px; // Adjust as needed
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
`;

// Example Component
const JournalEntryViewMode = () => {
  return (
    <Container>
      <LeftContainer>
        {/* 1st Section */}
        <Section>
          <InfoText>
            <div>JH0021</div>
            <div>USD $32312</div>
          </InfoText>
          <div>United States Dollar</div>
          <TagsContainer>
            <Tag>Tag 1</Tag>
            <Tag>Tag 2</Tag>
            <Tag>Tag 3</Tag>
          </TagsContainer>
        </Section>

        {/* 2nd Section */}
        <Section>
          <div>Some description text goes here.</div>
        </Section>

        {/* 3rd Section */}
        <Section>
          <InfoText>
            <div>Extra Reference Number</div>
            <div>321291</div>
          </InfoText>
        </Section>

        {/* 4th Section */}
        <Section>
          <SectionTitle>DATES</SectionTitle>
          <InfoText>
            <div>Transaction Date</div>
            <div>2024-08-01</div>
          </InfoText>
          <InfoText>
            <div>Posting Date</div>
            <div>2024-08-02</div>
          </InfoText>
          <InfoText>
            <div>Due Date</div>
            <div>2024-08-15</div>
          </InfoText>
        </Section>
      </LeftContainer>

      <MiddleContainer>
        {/* 1st Section: AUTO REVERSAL */}
        <Section>
          <SectionTitle>AUTO REVERSAL</SectionTitle>
          <CheckBoxContainer>
            <div>Reverse Journal Entry</div>
            <CheckBox />
          </CheckBoxContainer>
          <InfoText>
            <div>Auto Reversal Date</div>
            <div>2024-08-15</div>
          </InfoText>
        </Section>

        {/* 2nd Section: RECURRENCE */}
        <Section>
          <SectionTitle>RECURRENCE</SectionTitle>
          <CheckBoxContainer>
            <div>Recur Transaction</div>
            <CheckBox />
          </CheckBoxContainer>
          <InfoText>
            <div>Frequency</div>
            <div>Monthly</div>
          </InfoText>
          <InfoText>
            <div>Interval</div>
            <div>2 of 12</div>
          </InfoText>
          <InfoText>
            <div>Next Recurrence Date</div>
            <div>2024-08-15</div>
          </InfoText>
        </Section>
      </MiddleContainer>

      <RightContainer>
        {/* 1st Section: Cost Center */}
        <Section>
          <SectionTitle>Cost Center</SectionTitle>
          <InfoText>
            <div>Division</div>
            <div>Dubai</div>
          </InfoText>
          <InfoText>
            <div>Department</div>
            <div>Accounting</div>
          </InfoText>
          <InfoText>
            <div>Project</div>
            <div>ERP Project</div>
          </InfoText>
        </Section>

        {/* 2nd Section: Custom Fields */}
        <Section>
          <SectionTitle>Custom Fields</SectionTitle>
          <InfoText>
            <div>Custom Field 1</div>
            <div>Some Text</div>
          </InfoText>
          <InfoText>
            <div>Custom Field 2</div>
            <div>Some Text</div>
          </InfoText>
          <InfoText>
            <div>Custom Field 3</div>
            <div>Some Text</div>
          </InfoText>
          <InfoText>
            <div>Custom Field 4</div>
            <div>Some Text</div>
          </InfoText>
          <InfoText>
            <div>Custom Field 5</div>
            <div>Some Text</div>
          </InfoText>
        </Section>
      </RightContainer>
      <RightContainer>
        <LargeButton name={"Pending For Approval"} />
      </RightContainer>
    </Container>
  );
};

export default JournalEntryViewMode;
