import React, { forwardRef, useRef } from 'react';
import { Select, Text, Group } from '@mantine/core';
import { LuChevronDown } from 'react-icons/lu';

// Custom dropdown item component to display only the label
const SelectItem = forwardRef(({ label, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Text size="12px" color='#464f60cc' weight={500}>{label}</Text>
  </div>
));

const MRTSingleValueDD = ({ value, onChange, data, placeholder }) => {
  const selectRef = useRef(null); // Reference for Select component

  const handleIconClick = () => {
    if (selectRef.current) {
      // Manually trigger the dropdown to open
      selectRef.current.focus(); // Focus on the input field to open the dropdown
    }
  };

  return (
    <Select
      ref={selectRef} // Add the ref to Select component
      placeholder={placeholder}
      data={data}
      value={value}
      onChange={onChange}
      rightSection={
        // Add click event to the icon
        <LuChevronDown
          size={20}
          style={{ cursor: 'pointer' }}
          onClick={handleIconClick} // Trigger dropdown on icon click
        />
      }
      rightSectionWidth={40} // Adjust the width of the right section
      styles={{
        input: {
          cursor: "text",
          border: 'none',
          backgroundColor: 'transparent',
          fontSize: "12px",
          fontWeight: 400,
          color: "#464f60cc" // Custom font color
        },
      }}
      searchable
      clearable
      itemComponent={SelectItem} // Custom component for rendering dropdown options (label only)
      nothingFoundMessage="No options"
      filter={(value, item) =>
        item.label.toLowerCase().includes(value.toLowerCase().trim())
      }
      // Custom rendering of selected value in the input field
      valueComponent={({ value }) => {
        const selected = data.find((item) => item.value === value);
        return selected ? (
          <Group noWrap>
            <Text size="12px" color='#464f60cc' weight={500}>{selected.label}</Text>
          </Group>
        ) : null;
      }}
    />
  );
};

export default MRTSingleValueDD;
