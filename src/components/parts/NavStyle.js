import styled from "styled-components";

export const Wrapper = styled.div`
  width: 156.22px;
  height: 85vh;
  overflow-y: auto;
  /* background-color: orange; */
  margin-top: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  /* background-color: green; */
  border-right: 1px solid lightgrey;
  @media (max-width: 1213px) {
    width: 130px;
  }
  @media (max-width: 1177px) {
    width: 110px;
  }
  @media (max-height: 900px) {
    height: 76.5vh;
  }
`;
export const SectionTitle = styled.div`
  font-size: 12px;
  color: ${(props) => props.textColor};
  font-weight: 700;
  text-align: center;
  padding-bottom: 10px;
  width: 100%;
  margin: auto;
  @media (max-width: 1177px) {
    font-size: 10px;
  }
`;
export const SectionNames = styled.div`
  text-align: center;
  margin: auto;
`;
export const Names = styled.button`
  font-size: 12px;
  text-align: center;
  /* color: #464f60cc; */
  font-weight: 400;
  width: 100%;
  padding: 15px 0px;
  margin: auto;
  color: #464f60;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? props.HoverColor : "transparent"};
  border: none;
  margin: 5px 0;
  &:hover {
    background-color: ${(props) => props.HoverColor};
  }
  @media (max-width: 1177px) {
    font-size: 10px;
  }
`;
