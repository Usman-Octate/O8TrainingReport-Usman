import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

const DropDownContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  position: relative;
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

const DetailsContainer = styled.div`
  margin-top: 5px;
  font-size: 14px;
  display: flex;
  // width: 100px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  //   background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
  // width: 10px;
`;

const DetailValue = styled.span`
  font-weight: bold;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: absolute;
  top: -11px;
  left: 7px;
  z-index: 1;
  font-size: 12px;
  padding: 0px 4px;
  color: #58606f;
  font-weight: 700;
`;

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
  }),
  option: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "10px",
  }),
  singleValue: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "column",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#58606f",
  }),
};

const ContactPersonDropDown = ({ name = "Contact Person", options = [] }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedContact(selectedOption ? selectedOption.value : null);
  };

  const formattedOptions = options.map((contact) => ({
    value: contact,
    label: (
      <div>
        <div>{contact.name}</div>
        <div style={{ fontSize: "12px", color: "#888" }}>{contact.role}</div>
      </div>
    ),
  }));

  return (
    <DropDownContainer>
      <Title>{name}</Title>
      <Select
        placeholder=""
        options={formattedOptions}
        styles={customStyles}
        onChange={handleChange}
        isClearable
      />

      {selectedContact && (
        <DetailsContainer>
          <DetailItem>
            <DetailValue>{selectedContact.name}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailValue style={{ fontWeight: "normal" }}>
              {selectedContact.role}
            </DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailValue>{selectedContact.contact}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailValue>{selectedContact.email}</DetailValue>
          </DetailItem>
        </DetailsContainer>
      )}
    </DropDownContainer>
  );
};

export default ContactPersonDropDown;
