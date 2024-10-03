import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { TransactionUpdateNew } from "../../../../Api/Apis";
import ChartAccountInput from "../../../../components/Inputs/ChartAccountInput";
import Toaster from "../../../../components/Modals/Toaster";

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: auto;
  border-radius: 12px;
  position: relative;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
`;

const Title = styled.h2`
  font-size: 14px;
  padding-left: 5px;
  color: #58606f;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  background-color: ${(props) => (props.primary ? "#007BFF" : "#fff")};
  border: ${(props) => (props.primary ? "none" : "1px solid #cbcbcb")};
  &:hover {
    opacity: 0.8;
  }
`;

const Line = styled.div`
  background-color: #7f7f7f;
  width: 100%;
  height: 1px;
  opacity: 0.1;
  margin: 0px 10px 10px 10px;
`;

const EditTransactionModal = ({ isOpen, onRequestClose, transactionData }) => {
  const [toasterVisible, setToasterVisible] = useState(false);
  const [toasterData, setToasterData] = useState({
    icon: "",
    text: "",
    text2: "",
  });
  const modalRef = useRef();

  const [formData, setFormData] = useState({
    currentNumber: "",
    firstNumber: "",
    length: "",
    nextNumber: "",
    prefix: "",
    separator: "",
    seriesType: "",
    status: false,
    suffix: "",
    transactionType: "",
  });

  useEffect(() => {
    if (transactionData) {
      setFormData({
        currentNumber: transactionData.currentNumber,
        firstNumber: transactionData.firstNumber,
        length: transactionData.length,
        nextNumber: transactionData.nextNumber,
        prefix: transactionData.prefix,
        separator: transactionData.separator,
        seriesType: transactionData.seriesType,
        status: transactionData.status,
        suffix: transactionData.suffix,
        transactionType: transactionData.transactionType,
      });
    }
  }, [transactionData]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onRequestClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await TransactionUpdateNew(
        transactionData.id,
        formData.seriesType,
        formData.length,
        formData.prefix,
        formData.separator,
        formData.suffix,
        formData.firstNumber,
        formData.nextNumber,
        formData.currentNumber,
        formData.isDefaultStatus,
        formData.status
      );
      setToasterData({
        icon: response.status ? "check" : "cross",
        text: response.status ? "Success!" : "Error!",
        text2: response.status
          ? "Transaction updated successfully."
          : "Failed to update the transaction.",
      });
      setToasterVisible(true);
      setTimeout(() => {
        setToasterVisible(false);
        onRequestClose();
      }, 3000);
    } catch (error) {
      setToasterData({
        icon: "cross",
        text: "Error!",
        text2: "An error occurred while updating the transaction.",
      });
      setToasterVisible(true);
      setTimeout(() => setToasterVisible(false), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {toasterVisible && (
        <Toaster
          icon={toasterData.icon}
          text={toasterData.text}
          text2={toasterData.text2}
          handleClose={() => setToasterVisible(false)}
          duration={3000}
        />
      )}
      <Overlay>
        <Wrapper ref={modalRef}>
          <Title>{formData.transactionType.toUpperCase()}</Title> 
          <Line />
          <Form onSubmit={handleSubmit}>
            <ChartAccountInput
              setWidth={"false"}
              Name="Series Name"
              value={formData.seriesType}
              onChange={(e) =>
                setFormData({ ...formData, seriesType: e.target.value })
              }
            />
            <ChartAccountInput
              setWidth={"false"}
              Name="Prefix"
              value={formData.prefix}
              onChange={(e) =>
                setFormData({ ...formData, prefix: e.target.value })
              }
            />
            <ChartAccountInput
              setWidth={"false"}
              Name="Separator"
              value={formData.separator}
              onChange={(e) =>
                setFormData({ ...formData, separator: e.target.value })
              }
            />
            <ChartAccountInput
              setWidth={"false"}
              Name="Suffix"
              value={formData.suffix}
              onChange={(e) =>
                setFormData({ ...formData, suffix: e.target.value })
              }
            />
            <ChartAccountInput
              setWidth={"false"}
              Name="First Number"
              value={formData.firstNumber}
              onChange={(e) =>
                setFormData({ ...formData, firstNumber: e.target.value })
              }
            />
            <ButtonContainer>
              <Button onClick={handleSubmit} primary type="submit">
                Save
              </Button>
              <Button onClick={onRequestClose}>Close</Button>
            </ButtonContainer>
          </Form>
        </Wrapper>
      </Overlay>
    </>
  );
};

export default EditTransactionModal;
