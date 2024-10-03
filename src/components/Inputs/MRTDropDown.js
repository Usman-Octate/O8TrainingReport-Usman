import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

// Dropdown container
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

// Dropdown input field
const DropdownInput = styled.input`
  width: 100%;
  padding: 8px 36px 8px 8px;
  font-size: 12px;
  color: #464f60cc;
  border: 1px solid #464f60;
  border-radius: 4px;
  background-color: transparent;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

// Dropdown icon
const DropdownIcon = styled(FaChevronDown)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
`;

// Dropdown menu
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #464f60;
  border-top: none;
  max-height: 160px;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  background-color: white;
`;

// Dropdown search input
const DropdownSearch = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid #464f60;
  font-size: 12px;
  box-sizing: border-box;
`;

// Dropdown item
const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#cce4ff" : "white")};
  &:hover {
    background-color: #f0f8ff;
  }
`;

const CustomDropdown = ({ options = [], value, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const ref = useRef();

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={ref}>
      <div>
        <DropdownInput
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onClick={(e) => e.stopPropagation()} // Prevent input click from closing dropdown
          placeholder="Select or type..."
        />
        <DropdownIcon onClick={handleToggleDropdown} />
        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownSearch
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {filteredOptions.map((option) => (
              <DropdownItem
                key={option}
                isSelected={value === option}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
      </div>
    </DropdownContainer>
  );
};

export default CustomDropdown;
