// import React from "react";

const DropdownRenderer = (props) =>
  props.value != null && (
    <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
      {props.value}
    </div>
  );

export default DropdownRenderer;
