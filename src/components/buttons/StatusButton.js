import { compose } from "@reduxjs/toolkit";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Btn = styled.button`
  font-size: 12px;
  text-align: center;
  color: ${(props) =>
    props.color === "Active" ||
    props.color === "Posted" ||
    props.color === "Completed" ||
    props.color === "Approved"
      ? "#41C980"
      : props.color === "Pending for Approval" ||
        props.color === "Partially Completed"
      ? "#98C425"
      : props.color === "Draft"
      ? "#FFA800"
      : props.color === "Rejected" || props.color === "Returned"
      ? "#EB5757"
      : props.color === "Open"
      ? "#007AFF"
      : props.color === "Inactive"
      ? "#6A768C"
      : null};
  background-color: ${(props) =>
    props.color === "Active" ||
    props.color === "Posted" ||
    props.color === "Completed" ||
    props.color === "Approved"
      ? "#ECFAF2"
      : props.color === "Pending for Approval" ||
        props.color === "Partially Completed"
      ? "#F5F9E9"
      : props.color === "Draft"
      ? "#FFF6E6"
      : props.color === "Rejected" || props.color === "Returned"
      ? "#FFF5F5"
      : props.color === "Open"
      ? "#E1EEFF"
      : props.color === "Inactive"
      ? "#F0F2F5"
      : null};
  padding: 3px 10px;
  border-radius: 10px;
  border: none;
`;

const StatusButton = ({ value }) => {
  return (
    <Wrapper>
      <Btn color={value}>{value}</Btn>
    </Wrapper>
  );
};

export default StatusButton;
