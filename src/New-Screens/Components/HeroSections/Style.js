import styled from "styled-components";

// *******TABLE DETAILS*******

export const Wrapper = styled.div`
  margin-bottom: 5px;
  margin: 5px 0px;
`;
export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
`;
export const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin: 10px 10px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const Div = styled.div`
  padding: 0 0 10px 0;
`;
export const Image = styled.div``;
export const Wrap = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  width: 100%;
  height: 255px;
  border-radius: 8px;
  margin: auto;
  /* padding: 20px 18px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  padding-bottom: 20px;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 10px;
  /* background-color: green; */
  padding-bottom: 70px;
  width: 98%;
  padding-left: 10px;
`;
export const Grab = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #dadbdf;
  border-radius: 8px;
  /* position: absolute; */
  margin-top: 20px;
  margin-left: 20px;
`;
export const Title2 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #5f656f;
  width: 30px;
  height: 10px;
  text-align: center;
  position: relative;
  bottom: 8px;
  left: 20px;
  background-color: white;
  padding: 0px 5px;
`;
export const Total = styled.div`
  width: 350px;
  height: 232px;
  border: 1px solid #dadbdf;
  border-radius: 9px;
  display: flex;
  margin-right: 20px;
  margin-top: 20px;
`;
export const Grid = styled.div`
  width: 120px;
  /* background-color: green; */
  border-top-left-radius: 8px;
  border-bottom: 1px solid #dadbdf;
  /* border-right: 1px solid #dadbdf; */
  background-color: #ebf1ff;
  text-align: left;
  font-size: 12px;
  color: #5f656f;
  padding-top: 18px;
  padding-bottom: 13px;
  padding-left: 20px;
`;
export const Grid2 = styled.div`
  /* background-color: red; */
  width: 120px;
  border-bottom: 1px solid #dadbdf;
  /* border-right: 1px solid #dadbdf; */
  background-color: #ebf1ff;
  text-align: left;
  font-size: 12px;
  color: #5f656f;
  padding-top: 18px;
  padding-bottom: 13px;
  padding-left: 20px;
`;
export const Grid3 = styled.div`
  width: 120px;
  /* background-color: blue; */
  border-bottom: 1px solid #dadbdf;
  /* border-right: 1px solid #dadbdf; */
  background-color: #ebf1ff;
  text-align: left;
  font-size: 12px;
  color: #5f656f;
  padding-top: 18px;
  padding-bottom: 13px;
  padding-left: 20px;
`;
export const Grid4 = styled.div`
  width: 120px;
  /* background-color: yellow; */
  border-bottom: 1px solid #dadbdf;
  /* border-right: 1px solid #dadbdf; */
  background-color: #ebf1ff;
  font-size: 12px;
  color: #5f656f;
  padding-top: 18px;
  padding-bottom: 13px;
  padding-left: 20px;
  text-align: left;
`;
export const Grid5 = styled.div`
  width: 120px;
  /* background-color: brown; */
  border-bottom-left-radius: 8px;
  /* border-bottom: 1px solid #dadbdf; */
  /* border-right: 1px solid #dadbdf; */
  background-color: #ebf1ff;
  text-align: left;
  font-size: 12px;
  color: #5f656f;
  padding-top: 18px;
  padding-bottom: 13px;
  padding-left: 20px;
`;
export const Grid6 = styled.div`
  width: 200px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 10px;
  border-bottom: 1px solid #dadbdf;
  /* background-color: green; */
  padding-top: 18px;
  padding-bottom: 13px;
  padding-right: 10px;
  text-align: right;
  font-size: 12px;
  color: #5f656f;
`;
export const Grid7 = styled.div`
  padding-top: 18px;
  padding-bottom: 13px;
  padding-right: 10px;
  border-bottom: 1px solid #dadbdf;
  text-align: right;
  font-size: 12px;
  color: #5f656f;
`;
export const Grid8 = styled.div`
  padding-top: 18px;
  padding-bottom: 13px;
  padding-right: 10px;
  border-bottom: 1px solid #dadbdf;
  text-align: right;
  font-size: 12px;
  color: #5f656f;
`;
export const Grid9 = styled.div`
  padding-top: 18px;
  padding-bottom: 13px;
  padding-right: 10px;
  border-bottom: 1px solid #dadbdf;
  text-align: right;
  font-size: 12px;
  color: #5f656f;
`;
export const Grid10 = styled.div`
  padding-top: 18px;
  padding-bottom: 13px;
  padding-right: 10px;
  text-align: right;
  font-size: 12px;
  color: #5f656f;
`;
export const Wrapper5 = styled.div`
  width: 100%;
`;

export const Title5 = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin: 10px 10px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
`;
export const Line = styled.div`
  background-color: #e0e0e0;
  height: 0.5px;
  width: 100%;
  margin: 10px 0px;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;
export const Check2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  padding-right: 25px;
`;
export const Check1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 175px;
  padding-left: 14px;
`;
export const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #5f656f;
  width: 120px;
`;
export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin: 15px 0;
`;
export const Wrap5 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-right: 10%;
`;
export const TagOn = styled.div`
  border: 1px solid #023f81;
  height: 10px;
  padding: 2px;
  border-radius: 20px;
  min-width: 50px;
  max-width: 90px;
  font-size: 12px;
  color: #023f81;
  display: flex;
`;
export const Some = styled.div`
  height: 10px;
`;

// ******Table Details*******
export const Tag = styled.div`
  width: 98.2%;
  height: 108px;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid #dadbdf;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  &::-webkit-scrollbar {
    scrollbar-width: thin;
  }
`;
export const Input4 = styled.input`
  border: none;
  outline: none;
  height: 20px;
  width: 100px;
  margin-top: 20px;
`;
export const Title3 = styled.div`
  position: relative;
  /* bottom: 12px; */
  left: 20px;
  top: 22px;
  z-index: 5;
  width: 50px;
  height: 20px;
  background-color:white;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: #5f656f;
  display: flex;
  gap: 5px;
`;

// ******Activity Section*******

export const Section11 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0px;
`;
export const Textutil11 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  margin: 20px 0;
  width: 82px;
  text-align: center;
`;
export const Line11 = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 0px 0px;
`;
export const Wrapper11 = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  height: 263px;
  border: none;
  border-radius: 8px;
  /* margin-left: 7px; */
  overflow-y: auto;

  padding: 20px 20px;
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e1e1e199;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
`;
export const Para11 = styled.div`
  font-size: 12px;
  color: #464f60cc;
`;
export const SubText11 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 18px;
  margin-top: 20px;
`;
export const Btn11 = styled.button`
  border: none;
  width: auto;
  height: 36px;
  background-color: ${(props) => props.btnColor};
  border-radius: 8px;
  font-size: 12px;
  color: #464f60cc;
  font-weight: 700;
`;
export const Text11 = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #464f60cc;
  width: auto;
`;
export const Grab11 = styled.div`
  padding: 20px 0;
  /* background-color: red; */
`;
export const Image11 = styled.div``;
export const Image9 = styled.div``;
export const Grab2 = styled.div`
  padding: 0 10px;
`;
