import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ChevronDown } from "@styled-icons/bootstrap/ChevronDown";
import { FaChevronDown } from "react-icons/fa";
import { Close } from "@styled-icons/material/Close";

const DropdownContainer = styled.div`
  position: relative;
  width: ${(props) =>
    props.setWidth === "true"
      ? "186px"
      : props.setWidth === "false"
      ? "416px"
      : props.setWidth === "equal"
      ? "158px"
      : "188px"};
  margin: -6px 0px 0px 0px;
`;

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 5px;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;

const DropdownIcon = styled(FaChevronDown)`
  width: 14px;
  color: #58606f;
  margin-right: 5px;
`;

const CloseIcon = styled(Close)`
  width: 14px;
  color: #58606f;
  margin-right: 5px;
  cursor: pointer;
`;

const DropdownListContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
`;

const DropdownListItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const DetailContainer = styled.div`
  margin-top: -8px;
  padding: 10px 10px 10px 5px;
  background-color: white;
  border-radius: 3px;
  font-size: 14px;
  max-width: 163px;
`;

const ContactDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const dropdownRef = useRef(null);

  const people = [
    {
      name: "Amir Kamran",
      role: "Finance Officer",
      phone: "123-456-7890",
      email: "amir@example.com",
    },
    {
      name: "Ahmad Mohsin",
      role: "Manager",
      phone: "234-567-8901",
      email: "ahmad@example.com",
    },
    {
      name: "Sara William",
      role: "HR Officer",
      phone: "345-678-9012",
      email: "sara@example.com",
    },
    {
      name: "Zara Taylor",
      role: "Developer",
      phone: "456-789-0123",
      email: "zara@example.com",
    },
    {
      name: "John Smith",
      role: "Analyst",
      phone: "567-890-1234",
      email: "john@example.com",
    },
    {
      name: "Jane Watson",
      role: "Designer",
      phone: "678-901-2345",
      email: "jane@example.com",
    },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (person) => {
    setSelectedPerson(person);
    setIsOpen(false);
  };

  const handleClearSelection = (e) => {
    e.stopPropagation();
    setSelectedPerson(null);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef}>
      <DropdownContainer>
        <DropdownHeader onClick={toggleDropdown}>
          <span
            style={{
              fontSize: "12px",
              color: "#4f5663",
              fontWeight: "700",
            }}
          >
            Contact Person
          </span>
          {selectedPerson && <CloseIcon onClick={handleClearSelection} />}
          <DropdownIcon />
        </DropdownHeader>
        {isOpen && (
          <DropdownListContainer>
            {people.map((person, index) => (
              <DropdownListItem
                key={index}
                onClick={() => handleSelect(person)}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "#58606f",
                    fontWeight: "700",
                  }}
                >
                  {person.name}
                </div>
                <div style={{ fontSize: "12px", color: "#58606f" }}>
                  {person.role}
                </div>
              </DropdownListItem>
            ))}
          </DropdownListContainer>
        )}
      </DropdownContainer>
      {selectedPerson && (
        <DetailContainer>
          <div
            style={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#58606f",
              marginBottom: "4px",
            }}
          >
            {selectedPerson.name}
          </div>
          <div
            style={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#58606f",
              marginBottom: "4px",
            }}
          >
            {selectedPerson.role}
          </div>
          <div
            style={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#58606f",
              marginBottom: "4px",
            }}
          >
            {selectedPerson.phone}
          </div>
          <div
            style={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#58606f",
              marginBottom: "4px",
            }}
          >
            {selectedPerson.email}
          </div>
        </DetailContainer>
      )}
    </div>
  );
};

export default ContactDropdown;
