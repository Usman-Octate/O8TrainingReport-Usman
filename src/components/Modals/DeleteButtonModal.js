import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.3); */
  z-index: 1000;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContent = styled.div`
  background: transparent;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1001 !important;

  transform: ${({ show }) => (show ? "scale(1)" : "scale(0.9)")};
  transition: transform 0.3s ease;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-bottom: -50px;
  margin-left: 190px;
  background-color: white;
  border-radius: 4px;
  padding: 5px 0px 5px 0px;
  /* border: 1px solid black; */
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1),
    /* top shadow */ -4px 0 8px rgba(0, 0, 0, 0.1),
    /* left shadow */ 4px 0 8px rgba(0, 0, 0, 0.1); /* right shadow */
`;

const Button = styled.button`
  background-color: transparent;
  color: #58606f;
  /* border: none; */
  /* border-radius: 4px; */
  padding: 6px 10px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  font-size: 14px;
  transition: background-color 0.3s ease;
  z-index: 100;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.5px solid #e8e8e8;

  &:hover {
    background-color: #d8eaff;
  }
`;

const DeleteButtonModal = ({
  onViewRowDetails,
  onAddLongDescription,
  onScanBarCode,
  show,
  onDelete,
  onAddRowAbove,
  onAddRowBelow,
  onClose,
}) => {
  const [isMounted, setIsMounted] = useState(show);
  const modalRef = useRef();

  useEffect(() => {
    if (show) setIsMounted(true);
  }, [show]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  const handleAnimationEnd = () => {
    if (!show) setIsMounted(false);
  };

  if (!isMounted) return null;

  return (
    <ModalContainer show={show} onAnimationEnd={handleAnimationEnd}>
      <ModalContent show={show} ref={modalRef}>
        <ButtonContainer>
          <Button onClick={onViewRowDetails}>View Row Details</Button>

          <Button onClick={onDelete}>Remove Row</Button>

          <Button onClick={onAddRowAbove}>Insert Row Above</Button>

          <Button onClick={onAddRowBelow}>Insert Row Below</Button>

          <Button onClick={onAddLongDescription}>Add Long Description</Button>

          <Button onClick={onScanBarCode}>Scan Bar Code</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteButtonModal;
