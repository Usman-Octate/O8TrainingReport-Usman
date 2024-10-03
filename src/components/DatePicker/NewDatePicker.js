import React, { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const NewDatePicker = () => {
  const dateFormat = useSelector((state) => state.dateFormat.format);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false); 
  };

  return (
    <div>
      <input
        type="text"
        value={selectedDate ? format(selectedDate, dateFormat) : ''}
        onClick={() => setIsDatePickerOpen(true)}
        readOnly
        style={{
          height: '30px',
          width: '100px',
          padding: '5px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
        placeholder={`(${dateFormat})`}
      />
      {isDatePickerOpen && (
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          onBlur={() => setIsDatePickerOpen(false)} // Hide when focus is lost
        />
      )}
    </div>
  );
};

export default NewDatePicker;
