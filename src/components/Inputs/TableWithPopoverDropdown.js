import React, { useState, forwardRef, useRef } from "react";
import { Select } from "@mantine/core";
import { HiMagnifyingGlass } from "react-icons/hi2";

// Custom dropdown item component to display label and description
const SelectItem = forwardRef(({ label, description, ...others }, ref) => (
  <div ref={ref} {...others} style={{ padding: "10px" }}>
    <p style={{ fontSize: "12px", fontWeight: 500, margin: 0 }}>{label}</p>
    <p style={{ fontSize: "12px", color: "grey", margin: 0 }}>{description}</p>
  </div>
));

// Custom value component using simple div and p elements
const CustomValueDisplay = ({ label, description, onClick }) => (
  <div
    onClick={onClick}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      cursor: "pointer",
      border: "none",
      padding: "0px",
      borderRadius: "4px",
      backgroundColor: "transparent",
    }}
  >
    <div style={{ fontSize: "12px", fontWeight: "400" }}>{label}</div>
    <div style={{ fontSize: "10px", color: "grey" }}>{description}</div>
  </div>
);

const TypeDropdown = ({
  value,
  onChange,
  data,
  placeholder,
  disabled = false,
}) => {
  const [editing, setEditing] = useState(false);
  const selectRef = useRef(null);

  const handleSelectChange = (val) => {
    if (!disabled) {
      const selectedItem = data.find((item) => item.value === val);
      if (selectedItem) {
        // Pass both label and description in array format for backend
        onChange([selectedItem.label, selectedItem.description]);
      }
      setEditing(false);
    }
  };

  const handleToggleEditing = () => {
    if (!disabled) {
      setEditing(!editing);
    }
  };

  // We expect the value to be an array like [label, description] now
  const selectedItem =
    Array.isArray(value) && value.length === 2
      ? { label: value[0], description: value[1] }
      : null;

  const icon = <HiMagnifyingGlass />;

  return (
    <div>
      {editing || !selectedItem ? (
        <Select
          ref={selectRef}
          placeholder={placeholder}
          data={data.map((item) => ({ ...item, value: item.value }))}
          value={selectedItem ? selectedItem.label : ""} // Display only the label in the input
          onChange={handleSelectChange}
          rightSection={icon}
          rightSectionPointerEvents="auto"
          rightSectionWidth={40}
          styles={{
            input: {
              cursor: disabled ? "not-allowed" : "text",
              border: "none",
              textAlign: "left",
              backgroundColor: "transparent",
              fontSize: "12px",
              fontWeight: "400",
            },
            item: (theme, { selected, hovered }) => ({
              backgroundColor: selected
                ? `${theme.colors.blue[1]}`
                : hovered
                ? `${theme.colors.blue[0]}`
                : "white",
              color: selected ? "#ffffff" : hovered ? "#000000" : "#464f60cc",
              fontSize: "12px",
              fontWeight: selected ? "500" : "400",
              padding: "10px",
              cursor: disabled ? "not-allowed" : "pointer",
            }),
            dropdown: {
              backgroundColor: "white",
            },
          }}
          searchable
          clearable
          itemComponent={SelectItem}
          nothingFoundMessage="No options"
          filter={(inputValue, item) =>
            item.label
              .toLowerCase()
              .includes(inputValue.toLowerCase().trim()) ||
            item.description
              .toLowerCase()
              .includes(inputValue.toLowerCase().trim())
          }
          disabled={disabled}
          onDropdownOpen={() => !disabled && setEditing(true)}
        />
      ) : (
        <CustomValueDisplay
          label={selectedItem.label}
          description={selectedItem.description}
          onClick={handleToggleEditing}
        />
      )}
    </div>
  );
};

export default TypeDropdown;
