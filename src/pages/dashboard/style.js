import styled from "styled-components";

export const Main = styled.div`
  padding: 0 12px;
  width: 100%;
  overflow-y: auto;

  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 600px) {
    padding: 0 6px;
  }
`;
export const BtnDiv = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 1.6rem;
`;
export const Content = styled.div`
  /* padding: 0 16px; */
`;
export const NavigatingDiv = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1.4rem 0;
  border-bottom: 1px solid #d9d9d9;
  @media (max-width: 800px) {
    gap: 1.3rem;
  }
  @media (max-width: 600px) {
    gap: 0.6rem;
    min-width: 20rem;
  }
`;
export const NavigatingBtn = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.color};
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isActive ? `3px solid ${props.color}` : "none"};
  padding-bottom: 8px;
  @media (max-width: 800px) {
    font-size: 10px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
    font-weight: 500;
  }
`;
export const CardDiv = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (max-width: 600px) {
    gap: 0.3rem;
    min-width: 20.3rem;
  }
  @media (max-width: 710px) {
    gap: 0.5rem;
  }
`;
export const BusinessOverview = styled.div`
  display: flex;

  gap: 1rem;
  margin-bottom: 2rem;
`;
export const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Container2 = styled.div`
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 1px 1.3px 3px 1px #00000033;
  border-radius: 5.25px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 20rem;

  @media (max-width: 1300px) {
    max-width: 50rem;
  }
  @media (max-width: 1190px) {
    max-width: 54rem;
  }
  @media (max-width: 1025px) {
    max-width: 53.3rem;
  }
  @media (max-width: 950px) {
    max-width: 50rem;
  }

  @media (max-width: 600px) {
    min-width: 19rem;
  }
`;
export const Container3 = styled.div`
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 1px 1.3px 3px 1px #00000033;
  border-radius: 5.25px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  min-width: 28.5rem;
  max-width: 50rem;
  @media (min-width: 1900px) {
    max-width: 50rem;
    min-width: 26rem;
    width: 100%;
  }
  @media (max-width: 1500px) {
    min-width: 24rem;
    /* width: 100%; */
  }
  @media (max-width: 1700px) {
    min-width: 15rem;
    /* width: 100%; */
  }
  @media (max-width: 1110px) {
    min-width: 10rem;
  }
  @media (max-width: 1190px) {
    max-width: 54rem;
  }
  @media (max-width: 1025px) {
    max-width: 53.3rem;
  }
  @media (max-width: 950px) {
    max-width: 50rem;
  }
  @media (max-width: 600px) {
    min-width: 19rem;
  }
`;
export const Container4 = styled.div`
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 1px 1.3px 3px 1px #00000033;
  border-radius: 5.25px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  height: 20rem;
  min-width: 28.5rem;
  max-width: 50rem;
  @media (max-width: 1300px) {
    min-height: 20rem;
  }
  @media (min-width: 1800px) {
    min-width: 25rem;
  }
  @media (max-width: 1190px) {
    max-width: 54rem;
  }
  @media (max-width: 1025px) {
    max-width: 53.3rem;
  }
  @media (max-width: 950px) {
    max-width: 50rem;
  }
  @media (max-width: 760px) {
    min-width: 2rem;
  }
  @media (max-width: 600px) {
    min-width: 19rem;
  }
`;
export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  /* margin-right: 1rem; */
  @media (min-width: 1900px) {
    flex-direction: row;
  }
`;
export const SecDiv = styled.div`
  height: 35.1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  @media (min-width: 1900px) {
    margin-right: 1rem;
  }
  /* margin-right: 1.2rem; */
  /* @media (max-width: 2200px) {
    margin-right: 3rem;
  } */
`;
export const TileIconDiv = styled.div`
  color: #464f6080;
  font-size: 12px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
`;
export const ThirdDiv = styled.div`
  display: flex;
  gap: 1rem;
  @media (min-width: 1900px) {
    flex-direction: column;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
