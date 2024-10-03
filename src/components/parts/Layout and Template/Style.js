import styled from "styled-components";
import SearchIcon from "../../../assets2/DashboardHeaderIcons/SearchIcon.svg";

export const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 20px 0px;
`;

export const Wrapper = styled.div``;
export const Grab = styled.div``;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
export const Title = styled.div`
  /* margin: 3vh 0vh; */

  color: ${(props) => props.color};
  font-size: 12px;
  font-weight: 700;
  width: 120px;
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
  margin-top: 5px;
  margin-bottom: 2vh;
`;
export const Image = styled.div`
  width: 20px;
`;

// ***********************************ACTIVITY STYLE*****************************

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 10px 10px;
  /* margin-top: 25px; */
`;

export const Btn3 = styled.div``;
export const Textutil = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.color};
`;
export const Line3 = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 20px 0px;
`;

export const Wrapper3 = styled.div`
  background-color: #ffffff;
  margin: 0px 10px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  /* width: 97%; */
  height: 263px;
  border: none;
  padding: 30px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const Para = styled.div`
  font-size: 12px;
  color: #464f60cc;
`;
export const SubText = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 18px;
  margin-top: 20px;
`;
export const Btn1 = styled.button`
  border: none;
  width: 91px;
  height: 36px;
  background-color: ${(props) => props.Color};
  border-radius: 8px;
  font-size: 12px;
  color: #464f60cc;
  font-weight: 700;
`;
export const Text3 = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #464f60cc;
`;
export const Grab3 = styled.div`
  margin-top: 50px;
`;
export const Image3 = styled.div`
  width: 20px;
`;
