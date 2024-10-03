import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AddButton from "../../components/buttons/AddButton";
import AgGridTable2 from "../../components/Table/AgGridTable2";
import DropDown from "../../components/buttons/DropDown";
import DropDownPriTheme from "../../components/buttons/DropDownPriTheme";
const Same10 = styled.div`
  /* margin: 0 4px; */
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
const JornalTables = ({
  Name,
  Icon,
  Title,
  ColData,
  RowData,
  button,
  clickScreenChange,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [value, setValue] = useState(true);

  const HandleOnChange = () => {
    setValue(!value);
  };
  const primaryColors = ["#2E90FA", "#F63D68", "#15B79E", "#6172F3"];
  return (
    <Same10>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px 0px",
          gap: "10px",
        }}
      >
        {primaryColors.includes(themeKeys.primary) ? (
          <>
            <DropButton onClick={HandleOnChange} color={themeKeys.primary}>
              {value ? (
                <DropDownPriTheme icon={"ArrowDown"} />
              ) : (
                <DropDownPriTheme icon={"ArrowRight"} />
              )}
              <TitleDrop txtColor={"#fff"}>{Name}</TitleDrop>
            </DropButton>
            {button === "true" ? (
              <AddButton
                title={Title}
                icon={Icon}
                clickScreenChange={clickScreenChange}
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
              <AddButton
                title={Title}
                icon={Icon}
                clickScreenChange={clickScreenChange}
              />
            ) : null}
          </>
        )}
      </div>

      {value ? (
        <Wrapper10 id="Attachment">
          <AgGridTable2 Height={true} rowData={RowData} colDefs={ColData} />
        </Wrapper10>
      ) : null}
      <Line />
    </Same10>
  );
};

export default JornalTables;
