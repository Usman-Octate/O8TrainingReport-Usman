import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AddButton from "../../components/buttons/AddButton";
import AgGridTable2 from "../../components/Table/AgGridTable2";
import DropDown from "../../components/buttons/DropDown";
import DropDownPriTheme from "../../components/buttons/DropDownPriTheme";
import HeadlessTable from "../../components/Table/HeadlessTable";
import AddNotesButton from "../Components/MantineTable/Buttons/AddNotesButton";
import { GetAccountType } from "../../Api/Apis";
const Same10 = styled.div`
  /* margin: 0 4px; */
  width: ${(props) => (props.width ? "50%" : "100%")};
`;
const Title10 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  width: 140px;
`;
const TitleDrop = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  margin-left: 7px;
  /* width: 140px; */
`;
const Wrapper10 = styled.div`
  margin-left: 7px;
`;
const Image = styled.div`
  /* margin-left: 12px; */
`;
const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 10px 0px;
`;
const DropButton = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  display: flex;
  padding: 10px;
  cursor: pointer;
`;
const Nav = styled.div`
  height: 36.7vh;
  width: 20vw;
  /* background-color: yellow; */
  /* border: 1px solid #dee2e6; */
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  border-radius: 8px;
`;
const Options = styled.div`
  width: 100%;
  padding: 0.89rem 0;
  /* margin: 10px 0; */
  /* background-color: white; */
  text-align: center;
  cursor: pointer;
  color: #464f60cc;
  font-size: 12px;
  background-color: ${(props) => (props.isSelected ? props.txtCol : "#ffffff")};
  &:hover {
    background-color: ${(props) => props.txtCol};
  }
`;
const Options1 = styled.div`
  width: 100%;
  padding: 15px 0;
  /* margin: 10px 0; */
  background-color: ${(props) => props.txtCol};
  text-align: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  color: #464f60cc;
  font-size: 12px;
  font-weight: bold;
`;
const Options2 = styled.div`
  width: 100%;
  padding: 0.96rem 0;
  /* margin: 10px 0; */
  text-align: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  color: #464f60cc;
  font-size: 12px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? props.txtCol : "#ffffff")};
  &:hover {
    background-color: ${(props) => props.txtCol};
  }
`;
const Wrap = styled.div``;
const Title3 = styled.div`
  width: 100%;
  padding: 15px 0;
  /* margin: 10px 0; */
  background-color: ${(props) => props.txtCol};
  text-align: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  color: #464f60cc;
  font-size: 12px;
  font-weight: bold;
`;

const SettingsTables = ({
  Name,
  Icon,
  Title,
  ColData,
  RowData,
  button,
  Click,
  Val,
  width,
  onClick,
  NavValue,
  setHeight,
  Inputs,
  SubRow,
  boxShadow,
  buttonIcon,
  buttonName,
  buttonClick,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [value, setValue] = useState(true);
  const [accountTypes, setAccountTypes] = useState([]);

  const HandleOnChange = () => {
    setValue(Val);
  };
  const primaryColors = ["#2E90FA", "#F63D68", "#15B79E", "#6172F3"];

  // //////////////////////////////////////////ACCOUNT TYPE GET////////////////////////////////////

  const [loading, setLoading] = useState(false);

  const GetData = async () => {
    setLoading(true);
    const Response = await GetAccountType();
    if (Response) {
      console.log(Response.data);
      setAccountTypes(Response.data);
    } else {
      alert("Something Wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Same10 width={width}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "10px 0px",
          paddingBottom: "5px",
          gap: "10px",
        }}
      >
        {primaryColors.includes(themeKeys.primary) ? (
          <>
            <DropButton color={themeKeys.primary}>
              {/* {value ? (
                <DropDownPriTheme icon={"ArrowDown"} />
              ) : (
                <DropDownPriTheme icon={"ArrowRight"} />
              )} */}
              <TitleDrop txtColor={"#fff"}>{Name}</TitleDrop>
            </DropButton>
            {button === "true" ? (
              <AddNotesButton
                icon={buttonIcon}
                title={buttonName}
                onClick={buttonClick}
              />
            ) : null}
          </>
        ) : (
          <>
            <Image style={{ cursor: "pointer" }} onClick={HandleOnChange}>
              {value ? (
                <DropDown icon={"ArrowDown"} />
              ) : (
                <DropDown icon={"ArrowRight"} />
              )}
            </Image>
            <Title10 txtColor={themeKeys.primary}>{Name}</Title10>
            {button === "true" ? (
              <AddNotesButton
                icon={buttonIcon}
                title={buttonName}
                onClick={buttonClick}
              />
            ) : null}
          </>
        )}
      </div>

      {Val ? (
        <Wrap>
          <HeadlessTable
            columns={ColData}
            data={RowData}
            setWidth={width}
            setHeight={setHeight}
            BoxShadow={boxShadow}
          />
        </Wrap>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Nav>
            <Title3 txtCol={themeKeys.hover2}>Category</Title3>
            {loading ? (
              <div className="loader-container" style={{ height: "28vh" }}>
                <span className="loader"></span>
              </div>
            ) : (
              accountTypes.map((accountType, index) => (
                <Options
                  key={index}
                  isSelected={NavValue === accountType.category}
                  onClick={() => onClick(accountType.category)}
                  txtCol={themeKeys.hover2}
                >
                  {accountType.category}
                </Options>
              ))
            )}
          </Nav>
          <HeadlessTable
            columns={ColData}
            data={RowData}
            BoxShadow={boxShadow}
          />
        </div>
      )}
      {/* <Line /> */}
    </Same10>
  );
};

export default SettingsTables;
