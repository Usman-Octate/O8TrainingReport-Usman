import React, { useState } from "react";
import styled from "styled-components";
import ChartAccountInput from "../Inputs/ChartAccountInput";
import DropdownInput from "../Inputs/DropdownInput";
import CalenderInput from "../Inputs/CalenderInput";
import HeadlessTable from "../../components/Table/HeadlessTable";
import { useSelector } from "react-redux";
import { Checkbox } from "@mantine/core";
import { createFiscalYear } from "../../Api/Apis";

const Wrapper = styled.div``;

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #464f60;
  margin-top: 4%;
  text-align: center;
`;

const Wrap = styled.div``;

const Btn = styled.button`
  background-color: #2e90fa;
  padding: 12px 30px;
  border-radius: 8px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  margin-top: 3rem;
`;

const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  height: 40px;
`;

const TagLine = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #464f60;
  text-align: center;
`;

const Div = styled.div`
  margin-top: 8%;
`;

const Btn2 = styled.div`
  background-color: white;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  color: #464f60;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  margin-top: 3rem;
`;

const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  width: 191px;
  padding-bottom: 10px;
`;

const Column1 = styled.div`
  height: 60vh;
`;

const Column2 = styled.div`
  width: 23vw;
  height: 50vh;
`;

const GridTable = styled.div``;

const WholeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 40px;
`;

const Gap = styled.div`
  margin: 15px 0;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  margin: 25px 0;
`;

const Btn1 = styled.div`
  font-size: 15px;
  color: #232222;
  border: 1px solid #cbcbcb;
  padding: 10px 15px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 50px;
  text-align: center;
  cursor: pointer;
`;

const Btn3 = styled.div`
  font-size: 15px;
  color: #ffffff;
  border: 1px solid #cbcbcb;
  padding: 11px 16px;
  width: 50px;
  text-align: center;
  background-color: #1677ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const SettingModal = ({ Cancel, Save }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  // State to store the fiscal year form data
  const [formData, setFormData] = useState({
    periodName: "",
    fiscalYearStartDate: "",
    noOfPeriods: "",
    currentPeriod: "",
    periodFrom: "",
    periodTo: "",
    status: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleUploadData = async () => {
    try {
      // Format the dates and ensure noOfPeriods is a number
      const formattedData = {
        periodName: formData.periodName, // Assuming it's a string and already correct
        fiscalYearStartDate: formData.fiscalYearStartDate
          ? formData.fiscalYearStartDate.toISOString().split("T")[0] // YYYY-MM-DD format
          : "",
        noOfPeriods: formData.noOfPeriods
          ? parseInt(formData.noOfPeriods, 10) // Convert to number
          : null,
        currentPeriod: formData.currentPeriod
          ? new Date(formData.currentPeriod).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }) // Convert to "DD Month YYYY" format
          : "",
        periodFrom: formData.periodFrom
          ? formData.periodFrom.toISOString().split("T")[0] // YYYY-MM-DD format
          : "",
        periodTo: formData.periodTo
          ? formData.periodTo.toISOString().split("T")[0] // YYYY-MM-DD format
          : "",
        status: formData.status || "ACTIVE", // Default to ACTIVE if not provided
      };

      // Log the formatted data for verification
      console.log("Formatted data being sent to API:", formattedData);

      const response = await createFiscalYear(formattedData);

      // Log the API response
      console.log("API Response:", response);

      if (response.status) {
        alert("Fiscal Year created successfully!");
      } else {
        alert("Failed to create fiscal year: " + response.data);
      }
    } catch (error) {
      console.error("Error creating fiscal year:", error);
    }
  };

  const columnsData = [
    {
      accessorKey: "fiscalPeriod",
      header: "Start Date",
    },
    {
      accessorKey: "fiscalYearStartDate",
      header: "End Date",
    },
    {
      accessorKey: "numberOfPeriods",
      header: "Lock",
      cell: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Checkbox />
        </div>
      ),
      enableColumnActions: false,
      enableSorting: false,
    },
  ];

  const Rowdata = [
    {
      fiscalPeriod: "John",
      fiscalYearStartDate: "Doe",
      numberOfPeriods: "123 Main St",
      periodFrom: "Anytown",
      periodTo: "CA",
      currentPeriod: "Yes",
      status: "Active",
    },
    {
      fiscalPeriod: "Jane",
      fiscalYearStartDate: "Smith",
      numberOfPeriods: "456 Oak St",
      periodFrom: "Othertown",
      periodTo: "NY",
      currentPeriod: "No",
      status: "Inactive",
    },
  ];

  return (
    <Wrap>
      <Wrapper>
        <WholeContainer>
          <Column1>
            <Gap>
              <ChartAccountInput
                Name="Period Name"
                Padding={true}
                setWidth="true"
                insertFromRight={false}
                value={formData.periodName}
                onChange={(e) =>
                  handleInputChange("periodName", e.target.value)
                }
              />
            </Gap>
            <Gap>
              <CalenderInput
                Name="Fiscal Year Start Date"
                width={true}
                onChange={(date) =>
                  handleInputChange("fiscalYearStartDate", date)
                }
                value={formData.fiscalYearStartDate}
              />
            </Gap>
            <Gap>
              <ChartAccountInput
                Name="No of Periods"
                Padding={true}
                setWidth="true"
                insertFromRight={false}
                value={formData.noOfPeriods}
                onChange={(e) =>
                  handleInputChange("noOfPeriods", e.target.value)
                }
              />
            </Gap>
            <Gap>
              <ChartAccountInput
                Name="Current Period"
                Padding={true}
                setWidth="true"
                insertFromRight={false}
                value={formData.currentPeriod}
                onChange={(e) =>
                  handleInputChange("currentPeriod", e.target.value)
                }
              />
            </Gap>
            <Gap>
              <CalenderInput
                Name="Period From"
                width={true}
                onChange={(date) => handleInputChange("periodFrom", date)}
                value={formData.periodFrom}
              />
            </Gap>
            <Gap>
              <CalenderInput
                Name="Period To"
                width={true}
                onChange={(date) => handleInputChange("periodTo", date)}
                value={formData.periodTo}
              />
            </Gap>
            <Gap>
              <DropdownInput
                Name="Status"
                Padding={true}
                setWidth={false}
                value={formData.status}
                onChange={(e) => handleInputChange("status", e.target.value)}
              />
            </Gap>
          </Column1>
          <Column2>
            <GridTable>
              <HeadlessTable
                columns={columnsData}
                data={Rowdata}
                setHeight={true}
                BoxShadow={true}
              />
            </GridTable>
            <ActionButtons>
              <Btn1 onClick={Cancel}>Cancel</Btn1>
              {/* <Btn3 onClick={Save}>Save</Btn3> */}
              <Btn3 onClick={handleUploadData}>Save</Btn3>
            </ActionButtons>
          </Column2>
        </WholeContainer>
      </Wrapper>
    </Wrap>
  );
};

export default SettingModal;
