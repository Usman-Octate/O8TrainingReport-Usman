// import { Select } from "antd";
// import { useState, useEffect } from "react";

// const { Option } = Select;

// const DropdownComp = (props) => {
//   const [selection, setSelection] = useState(props.value || ""); // Initialize state with props.value

//   useEffect(() => {
//     setSelection(props.value || ""); // Update state if props.value changes
//   }, [props.value]);

//   const handleDropDown = (value) => {
//     setSelection(value); // Update state with the selected value
//     props.api.stopEditing(false); // Stop editing mode
//     props.node.setDataValue(props.column.colId, value); // Update the cell value
//   };

//   return (
//     <Select
//       style={{
//         width: "100%",
//         height: "100%",
//         textAlign: "right", // Align text to the right
//       }}
//       value={selection} // Use value instead of defaultValue
//       onChange={handleDropDown} // Use onChange to handle selection changes
//       autoFocus
//     >
//       {props.values.map((item) => (
//         <Option key={item} value={item}>
//           {item}
//         </Option>
//       ))}
//     </Select>
//   );
// };

// // export default DropdownComp;
