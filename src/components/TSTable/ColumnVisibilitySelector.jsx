import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BsSliders } from "react-icons/bs";
import { convertCamelToTitleCase } from "./Table.utils";

// Custom styled components
const PopoverContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const PopoverButton = styled.button`
  background-color: transparent;
  color: grey;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const PopoverContent = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  right: 0;
  top: 40px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;
  overflow: hidden;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const PopoverBody = styled.div`
  padding: 20px;
  background-color: #fafafa;
  border-radius: 8px;
`;

const RadioGroupContainer = styled.div`
  margin-bottom: 16px;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const RadioButton = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: #f5f5f5;
  }

  input {
    margin-right: 8px;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: #f5f5f5;
  }

  input {
    margin-right: 8px;
  }
`;

const ColumnVisibilitySelector = ({ table, columnIds }) => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const popoverRef = useRef();

  const columnVisibilityCheckboxState = Object.entries(
    table.getState().columnVisibility
  )
    .filter(([_, value]) => value)
    .map(([key]) => key);

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setPopoverVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PopoverContainer ref={popoverRef}>
      <PopoverButton
        aria-label="Show Column Visibility"
        onClick={() => setPopoverVisible((prev) => !prev)}
      >
        <BsSliders size={24} />
      </PopoverButton>
      <PopoverContent visible={isPopoverVisible}>
        <PopoverBody>
          <RadioGroupContainer>
            <RadioGroup>
              <RadioButton>
                <input
                  type="radio"
                  value="all"
                  name="visibility"
                  onChange={() => {
                    table.setColumnVisibility(
                      columnIds.reduce((acc, val) => {
                        acc[val] = true;
                        return acc;
                      }, {})
                    );
                  }}
                  defaultChecked
                />
                Show All
              </RadioButton>
              <RadioButton>
                <input
                  type="radio"
                  value="none"
                  name="visibility"
                  onChange={() => {
                    table.setColumnVisibility(
                      columnIds.reduce((acc, val) => {
                        acc[val] = false;
                        return acc;
                      }, {})
                    );
                  }}
                />
                Show None
              </RadioButton>
            </RadioGroup>
          </RadioGroupContainer>

          <CheckboxGroup>
            {columnIds.map((id) => (
              <CheckboxLabel key={id}>
                <input
                  type="checkbox"
                  checked={columnVisibilityCheckboxState.includes(id)}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    table.setColumnVisibility({
                      ...table.getState().columnVisibility,
                      [id]: isChecked,
                    });
                  }}
                />
                {convertCamelToTitleCase(id)}
              </CheckboxLabel>
            ))}
          </CheckboxGroup>
        </PopoverBody>
      </PopoverContent>
    </PopoverContainer>
  );
};

export default ColumnVisibilitySelector;
