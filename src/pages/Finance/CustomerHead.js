// CustomHeader.js
import React from "react";

const CustomHead = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>{props.displayName}</span>
      <span style={{ marginLeft: "5px" }}>
        {/* Three dots icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 11a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM1 11a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm13 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
        </svg>
      </span>
    </div>
  );
};

export default CustomHead;
