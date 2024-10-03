import React, { useState } from "react";
import ChartAccountInput from "../../components/Inputs/ChartAccountInput";
import DropdownInput from "../../components/Inputs/DropdownInput";
// import CalenderInput from "../../components/Inputs/CalenderInput";
import CustomDatePicker from "../Inputs/CalenderInput";
import CalenderInput from "../../components/Inputs/CustomDatePicker";
import styled from "styled-components";

const Title = styled.div`
  color: #2e90fa;
  font-size: 12px;
  font-weight: 700;
  margin: 17px 3px;
`;

const Input = styled.div`
  margin: 10px 0;
`;

// Layout container with flexbox
const Container = styled.div`
  display: flex;
  justify-content: space-between; // Ensures left and right sections are spaced evenly
  gap: 20px; // Add some spacing between the two columns
`;

// Left section (Company Details and Address Details in a single column)
const LeftSection = styled.div`
  flex: 1; // Take equal space on the left side
`;

// Right section (Social Media Accounts)
const RightSection = styled.div`
  flex: 1; // Take equal space on the right side
`;

// Scrollable content
const ScrollbarContainer = styled.div`
  max-height: calc(100% - 40px); // Adjust height to allow scrolling
  overflow-y: auto;

  // Custom scrollbar styles
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UpdateComInfo = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Handle the date change
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    console.log("Selected Date: ", newDate);
  };


  return (
    <ScrollbarContainer>
      <Container>
        {/* Left Section: Company and Address Details */}
        <LeftSection>
          <div>
            <Title>COMPANY DETAILS</Title>
            <Input>
              <ChartAccountInput
                Name={"Company Name"}
                Padding={true}
                setWidth={"long"}
                insertFromRight={true}
              />
            </Input>
            <Input>
              <DropdownInput
                Name={"Business Type"}
                Padding={false}
                setWidth={"DrawerWidth"}
              />
            </Input>
            <Input>
              <DropdownInput
                Name={"Industry"}
                Padding={false}
                setWidth={"DrawerWidth"}
              />
            </Input>
            <Input>
            <CustomDatePicker
        Name="Select Date"
        // setWidth="long"
        setWidth={"long"}
        value={selectedDate}   // Pass the selected date as the value
        onChange={handleDateChange}  // Handle date change
      />
              {/* <CalenderInput
                Name={"Company Start Date"}
                setWidth={"long"}
              /> */}
            </Input>
            <Input>
              <ChartAccountInput
                Name={"Head Office Location"}
                Padding={true}
                setWidth={"long"}
                insertFromRight={true}
              />
            </Input>
          </div>

          <div>
            <Title>ADDRESS DETAILS</Title>
            <Input>
              <ChartAccountInput
                Name={"Street Line 1"}
                Padding={true}
                setWidth={"long"}
                insertFromRight={true}
              />
            </Input>
            <Input>
              <ChartAccountInput
                Name={"City"}
                Padding={true}
                setWidth={"long"}
                insertFromRight={true}
              />
            </Input>
            <Input>
              <ChartAccountInput
                Name={"State"}
                Padding={true}
                setWidth={"long"}
                insertFromRight={true}
              />
            </Input>
            <Input>
              <DropdownInput
                Name={"Country"}
                Padding={false}
                setWidth={"DrawerWidth"}
              />
            </Input>
          </div>
        </LeftSection>

        {/* Right Section: Social Media Accounts */}
        <RightSection>
          <div>
            <Title>SOCIAL MEDIA ACCOUNTS</Title>
            <Input>
              <ChartAccountInput
                Name={"WhatsApp"}
                Padding={true}
                setWidth={"long"}
                insertFromRight={true}
              />
            </Input>
            <Input>
              <ChartAccountInput
                Name={"Linkedin"}
                Padding={true}
                setWidth={"long"}
                insertFromRight={true}
              />
            </Input>
            <Input>
              <ChartAccountInput
                Name={"Instagram"}
                Padding={true}
                setWidth={"long"}
                insertFromRight={true}
              />
            </Input>
            <Input>
              <ChartAccountInput
                Name={"Facebook"}
                Padding={true}
                setWidth={"long"}
                insertFromRight={true}
              />
            </Input>
          </div>
        </RightSection>
      </Container>
    </ScrollbarContainer>
  );
};

export default UpdateComInfo;
