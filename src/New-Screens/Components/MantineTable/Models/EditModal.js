import React, { useState, useEffect } from 'react';
import { Modal, Button, TextInput, Box, Title } from '@mantine/core';
import styled from 'styled-components';
import { updateNote } from '../../../../Api/Apis';

// Styled components for Mantine Modal
const StyledTitle = styled(Title)`
  margin-bottom: 15px;
  color: #464f60cc;
  font-size: 18px;
`;

const SimpleTextarea = styled.textarea`
  width: 95%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: vertical; // Allows resizing only vertically
  min-height: 100px; // Ensures a minimum height
  font-size: 12px; // Match the font size of CustomModal
  transition: border-color 0.3s ease; // Smooth transition for border color changes

  &:focus {
    border-color: #2e90fa; // Blue border on focus
    outline: none; // Remove default outline
  }
`;

const StyledTextInput = styled(TextInput)`
  input {
    border: 1px solid #ccc; // Default border
    transition: border-color 0.3s ease; // Smooth transition for border color changes

    &:focus {
      border-color: #2e90fa; // Blue border on focus
      outline: none; // Remove default outline
    }
  }
`;
const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;

const SaveButton = styled.div`
  padding: 12px 30px;
  background-color: #2e90fa; // Blue background for Save button
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer; // Makes cursor a pointer on hover
  transition: background-color 0.3s, box-shadow 0.3s; // Smooth transition for hover effects
`;

const CloseButton = styled.div`
  padding: 12px 30px;
  background-color: white; // White background for Close button
  color: black;
  border: 1px solid #d3d3d3; // Light grey border
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer; // Makes cursor a pointer on hover
  transition: background-color 0.3s, border 0.3s; // Smooth transition for hover effects
`;

const EditModal = ({ isOpen, onClose, onSave, row }) => {
  const [formData, setFormData] = useState({
    user: '',
    date: '',
    notedetail: '',
  });

  useEffect(() => {
    if (row) {
      setFormData({
        user: row.original.user || '',
        date: row.original.date || '',
        notedetail: row.original.notesDetail || '', // Change to match backend property
      });
    }
  }, [row]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(row.original.id, formData);
    onClose();
  };

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title={<StyledTitle order={2}>Update Notes</StyledTitle>}
      size="md"
      padding="md"
      centered
      // overlayOpacity={0.1}
      // overlayBlur={1}
    >
      <TextInput
        label="User"
        name="user"
        value={formData.user}
        onChange={handleChange}
        style={{ display: 'none' }} // Hidden field
      />
      <TextInput
        label="Date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        style={{ display: 'none' }} // Hidden field
      />
      <SimpleTextarea
        name="notedetail"
        value={formData.notedetail}
        onChange={handleChange}
        placeholder="Enter your note here..."
      />
      <ButtonContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </ButtonContainer>
    </Modal>
  );
};

export default EditModal;
