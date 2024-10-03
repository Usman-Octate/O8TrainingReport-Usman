import styled from "styled-components";
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 8px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopDiv = styled.div``;
export const TopDivWrapper = styled.div`
  min-height: 10.4rem;
  @media (max-width: 1024px) {
    min-height: 12.3rem;
  }
  @media (max-width: 1450px) {
    min-height: 13rem;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100px;
`;
export const TableMain = styled.div`
  // margin-top: 20px;
  // height: 50vh;
  // border-radius: 8px;
`;
