import React from "react";
import styled from "styled-components";
import TitleOfSection from "../../../New-Screens/Components/TitleOfSection";
import AddNotesButton from "../../../New-Screens/Components/MantineTable/Buttons/AddNotesButton";
import { MdEdit } from "react-icons/md";
import Info from "../../../assets2/ButtonIcons/InformationIcon.svg";
import ActivityPart from "../../../New-Screens/Sections/ActivityPart";
import { useSelector } from "react-redux";

// Styled components
const Container = styled.div`
  width: 100%;
`;

const Section = styled.div`
  padding: 15px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #ecedef;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #2f80ed;
`;

const SubTitle = styled.div`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #58606f;
  font-weight: bold;
`;

const SubText = styled.div`
  font-size: 12px;
  color: #b5b8bf;
  margin-bottom: 15px;
  width: 400px;
`;

const Subtext2 = styled.div`
  font-size: 12px;
  color: #6a727f;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const Accural = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  width: 400px;
`;

const DaysInput = styled.input`
  width: 50px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 12px;
`;

const Note = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  margin-top: 15px;
  width: 400px;
`;

const RecurringDetails = styled.div`
  margin-top: 15px;
  width: 400px;
`;

const Title = styled.div`
  font-size: 12px;
  color: #6a727f;
  font-weight: bold;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const Line = styled.div`
  background-color: #ecedef;
  height: 1px;
  width: 100%;
`;

const CheckboxLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-top: 10px;
  font-size: 12px;
  color: #6a727f;
`;
const Wrapper = styled.div`
  padding: 0 15px;
`;

// Main component
const GeneralConfig = () => {
  const RecurringData = [
    { title: "Frequency", day: "Monday" },
    { title: "Repeat", day: "Friday" },
    { title: "Ends", day: "Monday" },
  ];
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  return (
    <>
      <Wrapper>
        <Container>
          {/* Default Configuration */}
          <Section>
            <SectionTitle>
              <TitleOfSection title={"FINANCIALS & TAXES"} />
              <AddNotesButton icon={MdEdit} title={"Change Default"} />
            </SectionTitle>
            <div style={{ marginLeft: "15px", marginTop: "20px" }}>
              <SubTitle>ACCOUNTING METHOD</SubTitle>
              <SubText>
                The Accounting Method setting lets you choose how transactions
                are recorded. This affects your financial reporting and
                record-keeping. Select the method that aligns with your
                accounting practices.
              </SubText>
              <Accural>
                <Title>Accounting Method</Title>
                <Subtext2>Accrual</Subtext2>
              </Accural>
              <CheckboxLabel>
                Collapse Sub-Section on every screen
                <Input type="checkbox" />
              </CheckboxLabel>
            </div>
          </Section>

          {/* Journal Entry Reversal */}
          <Section>
            <SectionTitle>
              <TitleOfSection title={"ORDER TO CASH"} />
              <AddNotesButton icon={MdEdit} title={"Update Reversal Date"} />
            </SectionTitle>
            <div style={{ marginLeft: "15px", marginTop: "20px" }}>
              <SubTitle>JOURNAL ENTRY AUTO REVERSAL</SubTitle>
              <SubText>
                Define the default information that will be automatically filled
                when creating a new transaction. Users can still modify these
                defaults during transactions as needed.
              </SubText>
              <Accural>
                <Subtext2>Auto Reversal</Subtext2>
                <DaysInput type="number" defaultValue={15} />
              </Accural>
              <Note bgColor={themeKeys.hover2}>
                <img
                  src={Info}
                  style={{ width: "16px", height: "16px" }}
                  alt="info"
                />
                <Subtext2>
                  Users can override it according to their preference.
                </Subtext2>
              </Note>
            </div>
          </Section>

          {/* Recurring Transaction */}
          <Section>
            <SectionTitle>
              <TitleOfSection title={"PROCUREMENT"} />
              <AddNotesButton icon={MdEdit} title={"Update Format"} />
            </SectionTitle>
            <div style={{ marginLeft: "15px", marginTop: "20px" }}>
              <SubText>
                Recurring Transactions are automated entries that take place at
                specified intervals.
              </SubText>
              <RecurringDetails>
                {RecurringData.map((x, index) => (
                  <div key={index}>
                    <Wrap>
                      <Title>{x.title}</Title>
                      <Subtext2>{x.day}</Subtext2>
                    </Wrap>
                    {index !== RecurringData.length - 1 && <Line />}
                  </div>
                ))}
              </RecurringDetails>
              <CheckboxLabel>
                Recurring Transaction will be saved as draft
                <Input type="checkbox" />
              </CheckboxLabel>
            </div>
          </Section>
        </Container>
        <ActivityPart ShowButton={false} Val={true} />
      </Wrapper>
    </>
  );
};

export default GeneralConfig;
