import React from 'react';
import { TextInput, rem } from '@mantine/core';

const MRTTableInput = ({
  label,
  description,
  placeholder,
  value,
  onChange,
  error,
  disabled,
  leftSection,
  rightSection,
  leftSectionPointerEvents = 'auto',
  rightSectionPointerEvents = 'auto',
  ...rest
}) => {
  return (
    <TextInput
      label={label}
      description={description}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      disabled={disabled}
      leftSection={leftSection}
      rightSection={rightSection}
      leftSectionPointerEvents={leftSectionPointerEvents}
      rightSectionPointerEvents={rightSectionPointerEvents}
      styles={(theme) => ({
        input: {
          fontSize: '12px !important',
          fontWeight: '400',
          color: theme.colors.dark[7],
        },
        label: {
          fontSize: '14px',
          fontWeight: '500',
        },
        description: {
          fontSize: '12px',
          color: theme.colors.gray[6],
        },
        error: {
          fontSize: '12px',
          color: theme.colors.red[6],
        },
      })}
      {...rest}
    />
  );
};

export default MRTTableInput;
