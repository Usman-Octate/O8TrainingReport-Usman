import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Select from "react-select";
import { TransactionGet, getAllJournalEntries } from "../../Api/Apis";


const customOverlayStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.1)", 
  },
};

const SelectDropdown = styled(Select)`
  width: 160px;
  border-right: 1px solid transparent;
  font-size: 12px;
`;

const ModalContainer = styled.div`
  padding: 20px;
  max-width: 452px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 100000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 10px;
`;

const Radio = styled.input`
  margin-right: 0px;
  width: 16px;
  height: 16px;
`;

const TextContainer = styled.div`
  margin-left: 20px;
`;

const MainTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #464f60;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #464f60;
`;

const SubText = styled.div`
  font-size: 12px;
  color: #464f60;
  margin-top: 4px;
  opacity: 0.6;
`;

const SeriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 20px;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #464f60;
`;

const LabelNo = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #464f60;
  display: flex,
  align-items center;
  justify-content: flex-end;
  width: 90px;
`;

const Input = styled.input`
  padding: 8px;
  width: 150px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 12px;

  &::placeholder {
    color: #464f60;
    opacity: 0.6;
  }
`;

const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 4px;
  display: flex;
  align-items: center;
  align-self: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ButtonC = styled.button`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: white;
  color: black;
  cursor: pointer;
  margin-left: 10px;
`;

const ButtonS = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-left: 10px;
`;

const NumberModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10% 0px;
  z-index: 1000000000;
  background-color: transparent;
  outline: none;
`;

const NumberingChoiceModal = ({
  isOpen,
  onRequestClose,
  onSave,
  FilterByTransactionType,
}) => {
  const [selectedOption, setSelectedOption] = useState("auto");
  const [transactionNumbers, setTransactionNumbers] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [currentNumber, setCurrentNumber] = useState("");
  const [manualNumber, setManualNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      const fetchTransactionNumbers = async () => {
        try {
          const response = await TransactionGet();
          if (response && response.status) {
            // Filter the data by transactionType and status
            const filteredData = response.data.filter(
              (item) =>
                item.transactionType === FilterByTransactionType &&
                item.status === true // Only include items with status true
            );
            setTransactionNumbers(filteredData);

            // Find the series with isDefaultStatus === true
            const defaultSeries = filteredData.find(
              (item) => item.isDefaultStatus === true
            );

            if (defaultSeries) {
              const defaultSeriesOption = {
                value: defaultSeries.seriesType.toLowerCase(),
                label: defaultSeries.seriesType,
                id: defaultSeries.id,
                currentNumber: defaultSeries.currentNumber,
              };
              setSelectedSeries(defaultSeriesOption);
              setCurrentNumber(defaultSeries.currentNumber);
            } else if (filteredData.length > 0) {
              // If no default series, select the first available series
              const firstSeries = filteredData[0];
              const firstSeriesOption = {
                value: firstSeries.seriesType.toLowerCase(),
                label: firstSeries.seriesType,
                id: firstSeries.id,
                currentNumber: firstSeries.currentNumber,
              };
              setSelectedSeries(firstSeriesOption);
              setCurrentNumber(firstSeries.currentNumber);
            } else {
              setSelectedSeries(null);
              setCurrentNumber("This series is not set yet.");
            }
          } else {
            setSelectedSeries(null);
            setCurrentNumber("Failed to fetch series.");
          }
        } catch (error) {
          console.error("Error fetching transaction numbers:", error);
          setSelectedSeries(null);
          setCurrentNumber("Error fetching series.");
        }
      };

      fetchTransactionNumbers();

      const timer = setTimeout(() => {
        window.requestAnimationFrame(() => {
          document.body.style.transform = "scale(1)";
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, FilterByTransactionType]);

  const handleOptionChange = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue);
  
    if (newValue === "manual") {
      // When switching to manual, we clear the selected series and current number
      setSelectedSeries(null);
      setCurrentNumber("");
    } else if (newValue === "auto" && selectedSeries === null && transactionNumbers.length > 0) {
      // When switching back to auto, retain the previously selected series or default one
      const defaultSeries = transactionNumbers.find(item => item.isDefaultStatus);
      if (defaultSeries) {
        const defaultSeriesOption = {
          value: defaultSeries.seriesType.toLowerCase(),
          label: defaultSeries.seriesType,
          id: defaultSeries.id,
          currentNumber: defaultSeries.currentNumber,
        };
        setSelectedSeries(defaultSeriesOption);
        setCurrentNumber(defaultSeries.currentNumber);
      } else {
        const firstSeries = transactionNumbers[0];
        const firstSeriesOption = {
          value: firstSeries.seriesType.toLowerCase(),
          label: firstSeries.seriesType,
          id: firstSeries.id,
          currentNumber: firstSeries.currentNumber,
        };
        setSelectedSeries(firstSeriesOption);
        setCurrentNumber(firstSeries.currentNumber);
      }
    }
    setManualNumber(""); // Reset manual number input if any
    setErrorMessage(""); // Clear any error message
  };
  

  const handleSeriesChange = (selectedOption) => {
    setSelectedOption("auto");
    const series = transactionNumbers.find(
      (item) =>
        item.seriesType.toLowerCase() === selectedOption.value.toLowerCase()
    );

    if (series) {
      const selectedSeriesOption = {
        value: series.seriesType.toLowerCase(),
        label: series.seriesType,
        id: series.id,
        currentNumber: series.currentNumber,
      };
      setSelectedSeries(selectedSeriesOption);
      setCurrentNumber(series.currentNumber);
    } else {
      setSelectedSeries(null);
      setCurrentNumber("This series is not set yet.");
    }
  };

  const handleManualNumberChange = (e) => {
    setManualNumber(e.target.value);
    setErrorMessage("");
  };

  const handleSave = async () => {
    if (selectedOption === "manual" && manualNumber.trim() !== "") {
      try {
        const journalEntriesResponse = await getAllJournalEntries();
        if (
          journalEntriesResponse &&
          journalEntriesResponse.status &&
          Array.isArray(journalEntriesResponse.data)
        ) {
          const journalEntries = journalEntriesResponse.data;

          const isDuplicate = journalEntries.some(
            (entry) =>
              entry.journalEntryNumber.toLowerCase() ===
              manualNumber.trim().toLowerCase()
          );

          if (isDuplicate) {
            setErrorMessage(
              "Reference number already in use. Please use a different one."
            );
            return;
          }
        } else {
          setErrorMessage("Failed to verify the reference number.");
          return;
        }
      } catch (error) {
        console.error("Error checking journal entries:", error);
        setErrorMessage("Error verifying the reference number.");
        return;
      }
    }

    if (onSave) {
      onSave({
        selectedOption,
        currentNumber:
          selectedOption === "auto"
            ? selectedSeries
              ? selectedSeries.currentNumber
              : ""
            : manualNumber,
        id: selectedSeries ? selectedSeries.id : "",
      });
    }
    onRequestClose();
  };

  // Generate dynamic options based on the series types available for the selected transactionType
  const seriesOptions = transactionNumbers.map((item) => ({
    value: item.seriesType.toLowerCase(),
    label: item.seriesType,
  }));

  return (
    <NumberModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={customOverlayStyles}
    >
      <ModalContainer>
        <Container>
          <MainTitle>Choose a Transaction Numbering</MainTitle>
          <SubText>
            Select the preferred numbering series for this transaction. You can
            either use auto numbering series or manual numbering.
          </SubText>
        </Container>
        <Container>
          <RadioContainer>
            <Radio
              type="radio"
              value="auto"
              checked={selectedOption === "auto"}
              onChange={handleOptionChange}
            />
            <TextContainer>
              <Title>Auto Numbering Series</Title>
              <SubText>
                Select the numbering series configured from the module settings.
              </SubText>
            </TextContainer>
          </RadioContainer>

          {selectedOption === "auto" && (
            <SeriesContainer>
              <Label>Choose the Series Type</Label>
              <SelectDropdown
                options={seriesOptions} // Dynamic options
                placeholder="Series"
                onChange={handleSeriesChange}
                value={selectedSeries} // Controlled value
                styles={{
                  container: (provided) => ({
                    ...provided,
                    width: "140px",
                  }),
                }}
              />
              <LabelNo>{currentNumber}</LabelNo>
            </SeriesContainer>
          )}
        </Container>

        <Container>
          <RadioContainer>
            <Radio
              type="radio"
              value="manual"
              checked={selectedOption === "manual"}
              onChange={handleOptionChange}
            />
            <TextContainer>
              <Title>Manual Numbering</Title>
              <SubText>Enter the transaction number manually.</SubText>
            </TextContainer>
          </RadioContainer>

          {selectedOption === "manual" && (
            <SeriesContainer>
              <Label>Enter a Transaction Number</Label>
              <Input
                type="text"
                placeholder="Reference Number"
                value={manualNumber}
                onChange={handleManualNumberChange}
              />
            </SeriesContainer>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
          </div>
        </Container>
        <ButtonContainer>
          <ButtonC onClick={onRequestClose}>Cancel</ButtonC>
          <ButtonS onClick={handleSave}>Save</ButtonS>
        </ButtonContainer>
      </ModalContainer>
    </NumberModal>
  );
};

export default NumberingChoiceModal;
