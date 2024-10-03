import styled from "styled-components";
import SearchIcon from "../../../assets2/DashboardHeaderIcons/SearchIcon.svg";

export const Grab = styled.div``;
export const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 20px 0px;
`;

export const Wrapper = styled.div`
  width: 97%;
  margin-left: 2rem;
  /* margin-top: 3.5rem; */

  /* background-color: green; */
  @media (max-height: 900px) {
    margin-left: 1rem;
  }
`;
export const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
export const Title = styled.div`
  /* margin: 3vh 0vh; */

  color: ${(props) => props.textColor};
  font-size: 12px;
  font-weight: 700;
  width: 140px;
`;
export const Btn = styled.div`
  width: 6.5rem;
  font-size: 14px;
`;
export const Section1 = styled.div``;
export const FilterButton = styled.button`
  background-color: #ffffff;
  border: none;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  padding: 6px 17px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
`;
export const Input2 = styled.input`
  padding: 7px 35px;
  border-radius: 8px;
  border: none;
  outline: none;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  background: url(${SearchIcon}) no-repeat 5% center;
  background-size: 16px 16px;
  /* font-size: 12px; */
  color: #a1a9b8;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;
export const Image = styled.div`
  width: 20px;
`;

// ********************************MAIN STYLE******************************

export const Main2 = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-height: 1500px) {
    height: 99vh;
  }
  @media (max-height: 1400px) {
    height: 100vh;
  }
  @media (max-height: 1350px) {
    height: 99.5vh;
  }
  @media (max-height: 1350px) {
    height: 99.5vh;
  }
  @media (max-height: 950px) {
    height: 100vh;
  }
  @media (max-height: 800px) {
    height: 100vh;
  }
  @media (max-height: 700px) {
    height: 100vh;
  }
`;
export const TopDiv = styled.div`
  /* overflow-x: auto; */
`;
export const TopDivWrapper = styled.div`
  /* overflow-x: auto; */
  /* background-color: red; */
  /* width: 100vw; */

  min-height: 5vh;
  @media (max-width: 1024px) {
    min-height: 12.3rem;
  }
  @media (max-width: 1450px) {
    min-height: 11.1rem;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Wrapper2 = styled.div`
  width: 100%;
  height: 85vh;
  padding: 0 10px;
  /* background-color: green; */
  /* background-color: #00ff00; */
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-height: 900px) {
    height: 85vh;
  }
  @media (max-height: 1350px) {
    height: 86vh;
  }
  @media (max-height: 1050px) {
    height: 86vh;
  }
  @media (max-height: 800px) {
    height: 70vh;
  }
  @media (max-height: 1000px) {
    height: 77.5vh;
  }
`;
export const Grab2 = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1rem;
  margin-top: 0px;
  /* background-color: yellow; */
  /* height: 90vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  } */
`;
