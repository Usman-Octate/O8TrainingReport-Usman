import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  height: 259px;
  background-color: #ffffff;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  border-radius: 8px;
  padding: 15px;
`;
export const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 6px 17px;
  cursor: pointer;
  /* margin: 10px 0; */
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  &:hover {
    background-color: #eef5ff;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Subtext = styled.div`
  color: #7f7f7f;
  font-size: 12px;
  width: 130px;
  text-align: left;
`;
export const Name = styled.div`
  color: #464f60;
  font-size: 12px;
  text-align: left;
  width: 130px;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #cecece;
`;
export const Message = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 9px 17px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 8px;
  &:hover {
    background-color: #eef5ff;
  }
`;
export const Title = styled.div`
  color: #787878;
  font-size: 12px;
`;

// **********************************ThemeContainer*******************************

export const Wrapper2 = styled.div`
  width: 200px;
  height: 259px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 15px;
`;

export const Title2 = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #464f60;
`;
export const SubText2 = styled.div`
  font-size: 12px;
  color: #7f7f7f;
`;
export const BrighterMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 68px;
  height: 26px;
  border: 1px solid #464f604d;
  border-radius: 8px;
  cursor: pointer;
  margin: 8px 0;
  padding: 0px 6px;
  &:hover {
    background-color: #eef5ff;
  }
`;
export const Name2 = styled.div`
  color: #464f60;
  font-size: 12px;
  width: 53px;
`;
export const Mode = styled.div`
  display: flex;
  align-items: center;
  /* gap: 10px; */
  justify-content: space-between;
  /* background-color: green; */
  /* width: 1%; */
  padding: 0px 10px;
`;
export const Title3 = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #464f60;
  margin-top: 25px;
`;
export const BrighterMode2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 68px;
  height: 26px;
  border: 1px solid #464f604d;
  border-radius: 8px;
  margin: 8px 0px;
  padding: 0 6px;
  cursor: pointer;
  &:hover {
    background-color: #eef5ff;
  }
`;
export const Circle = styled.div`
  height: 15.5px;
  width: 15.5px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export const Heading = styled.div``;
export const ColorSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
