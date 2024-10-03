import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const CustomDropdownRenderer = (props) => {
  const [value, setValue] = useState(props.value);
  const inputRef = useRef(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleDropdownChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    props.node.setDataValue(props.colDef.field, newValue);
    props.api.stopEditing();
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputBlur = () => {
    props.node.setDataValue(props.colDef.field, value);
    setEditing(false);
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
    setEditing(true);
    setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
  };

  const cellContent = (
    <div onClick={handleInputClick}>
      {!editing ? (
        <select value={value} onChange={handleDropdownChange}>
          {props.values.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          <option value={value}>{value}</option>
        </select>
      ) : (
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          ref={inputRef}
        />
      )}
    </div>
  );

  return ReactDOM.createPortal(cellContent, props.eParentOfValue);
};

export default CustomDropdownRenderer;
