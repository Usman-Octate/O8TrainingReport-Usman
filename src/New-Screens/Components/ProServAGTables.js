import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AddButton from "../../components/buttons/AddButton";
import AgGridTable2 from "../../components/Table/AgGridTable2";
import DropDown from "../../components/buttons/DropDown";

const Same10 = styled.div`
  margin: 0 0px;
`;
const Title10 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  width: 140px;
`;
const Wrapper10 = styled.div`
margin-left: 7px;
`;
const Image = styled.div`
margin-left: 12px`;
const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 10px 0px;
`;

const ProductServicesTables = ({ Name, Icon, Title, ColData, RowData, button }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [value, setValue] = useState(true);

  const HandleOnChange = () => {
    setValue(!value);
  };

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
        <Image style={{ cursor: "pointer" }} onClick={HandleOnChange}>
          {value ? (
            <DropDown size={"Small"} icon={"ArrowDown"} />
          ) : (
            <DropDown size={"Small"} icon={"ArrowRight"} />
          )}
        </Image>
        <Title10 txtColor={themeKeys.primary}>{Name}</Title10>
        {button === "true" ? <AddButton title={Title} icon={Icon} /> : null}
      </div>
      
      {value ? (
        <Wrapper10 id="Attachment">
          <AgGridTable2 rowData={RowData} colDefs={ColData} />
        </Wrapper10>
      ) : null}
      <Line />
    </Same10>
  );
};

export default ProductServicesTables;
