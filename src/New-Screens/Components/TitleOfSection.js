import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const PrimaryButton = styled.div`
  background: ${(props) => props.color};
  border-radius: 8px;
  display: flex;
  padding: 10px;
  cursor: pointer;
  width: fit-content;
  min-width: 5rem;
  /* margin: 5px; */
`;
const TextButton = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  margin-left: 7px;
  color: white;
`;
const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin: 5px 10px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
  padding-bottom: 10px;
`;
const TitleOfSection = ({ title }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const primaryColors = ["#2E90FA", "#F63D68", "#15B79E", "#6172F3"];

  return primaryColors.includes(themeKeys.primary) ? (
    <PrimaryButton color={themeKeys.primary}>
      <TextButton>{title}</TextButton>
    </PrimaryButton>
  ) : (
    <Title txtColor={themeKeys.primary}>{title}</Title>
  );
};

export default TitleOfSection;
