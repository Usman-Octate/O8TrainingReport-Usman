import React, { useState } from "react";
import { useSelector } from "react-redux";

const CustomModal = ({ isOpen, onClose, onSubmit }) => {
  const [notesDetail, setNotesDetail] = useState("");
  const [isFocused, setIsFocused] = useState(false); // New state for focus
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const handleSubmit = () => {
    if (notesDetail.trim()) {
      onSubmit({ notesDetail: notesDetail }); 
      setNotesDetail("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <h2 style={{ color: "#464f60cc", fontSize: "20px" }}>Add Note</h2>
        <textarea
          value={notesDetail}
          onChange={(e) => setNotesDetail(e.target.value)}
          placeholder="Enter your note here..."
          style={{
            ...modalStyles.textarea,
            borderColor: isFocused ? "blue" : "#ccc", 
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div style={modalStyles.buttonContainer}>
          <button onClick={onClose} style={modalStyles.closeButton}>
            Close
          </button>
          <button
            onClick={handleSubmit}
            style={{ ...modalStyles.submitButton, backgroundColor: "#2e90fa" }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)", // Increased opacity for better visibility
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  content: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textarea: {
    width: "95%",
    height: "100px",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid", // Border style will be managed dynamically
    resize: "vertical", // Allow resizing only vertically
    fontSize: "12px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  closeButton: {
    width: "100px", // Fixed width for the Close button
    marginRight: "10px",
    padding: "12px 30px",
    border: "1px solid lightgrey",
    borderRadius: "4px",
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
    borderRadius: "8px",
    // boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    fontSize: "15px",
    fontWeight: "500",
  },
  submitButton: {
    width: "100px", // Fixed width for the Submit button
    padding: "12px 30px",
    border: "none",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
    borderRadius: "8px",
    // boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    fontSize: "15px",
    fontWeight: "500",
  },
};

export default CustomModal;
