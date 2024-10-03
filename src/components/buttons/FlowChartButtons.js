import React, { useEffect, useState } from "react";
import SearchIcon from "../../assets2/DashboardHeaderIcons/SearchIcon.svg";
// import Filter2 from "../../assets2/ButtonIcons/Filter.svg";
import AddButton from "../../components/buttons/AddButton";
// import Filter from "../parts/Filter";
import styled from "styled-components";
import { PopUp } from "../parts/PopUp";
import { createPortal } from "react-dom";
import ChartOfAccount from "../../New-Screens/ChartOfAccountNew";
import { useAppContext } from "../../context/AppProvider";
import { useSelector } from "react-redux";
import { AiOutlineFileSearch } from "react-icons/ai";
import { PiPrinter } from "react-icons/pi";

// const FilterButton = styled.button`
//   background-color: #ffffff;
//   border: none;
//   box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
//   padding: 8px 17px;
//   border-radius: 8px;
//   cursor: pointer;
//   // position: relative;
//   @media (max-width: 1024px) {
//     padding: 4px 13px;
//   }
// `;

const Input = styled.input`
  padding: 10px 35px;
  border-radius: 8px;
  border: none;
  outline: none;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  background: url(${SearchIcon}) no-repeat 5% center;
  background-size: 16px 16px;
  color: #a1a9b8;
  @media (max-width: 1024px) {
    padding: 6px 35px;
  }
`;

const Main = styled.div`
  margin: 50px 0px 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1450px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
`;
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  /* flex-wrap: wrap; */
  min-width: 300px;
`;

const Wrap = styled.div`
  background-color: white;
  /* width: 100px; */
  height: 80px;
  box-shadow: 0px 2.702708125114441px 8.513540267944336px 0px #00000040;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  position: absolute;
  top: 40px;
  z-index: 1000;
  margin-right: 100px;
`;
const BtnText = styled.div`
  color: #827ca3;
  font-weight: 600;
  margin-left: 8px;
  font-size: 14px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 10px 10px;
  &:hover {
    background-color: ${(props) => props.hover};
  }
`;

// const Image = styled.div`
//   display: flex;
//   align-items: center;

//   @media (max-width: 1024px) {
//     img {
//       width: 15px;
//     }
//   }
// `;
const FlowChartButtons = ({
  exportcsv,
  onClick,
  clickScreenChange,
  handleEditButton,
  Object,
  Object2,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const { close } = useAppContext();
  const keys = useSelector((state) => state.localization.keys);
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [open, setOpen] = useState(false);

  const ToggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    handlePopup();
  }, [close]);
  const handlePopup = () => {
    setShowPopup(false);
  };
  const popupOpen = () => {
    setShowPopup(true);
  };

  return (
    <>
      <Main>
        <ButtonsDiv>
          <AddButton
            fixWidth={true}
            title={keys.KEY100196}
            icon={"AddWhite"}
            color={"blue"}
            onClick={onClick}
            clickScreenChange={clickScreenChange}
          />
          {Object ? null : <AddButton title={keys.KEY10011} icon={"AddBlue"} />}

          <AddButton
            title={keys.KEY100197}
            icon={"Edit"}
            clickScreenChange={handleEditButton}
          />

          <AddButton title={keys.KEY100198} icon={"Custom"} />

          {Object ? (
            <>
              <AddButton title={"Reverse"} icon={"Reverse"} />
              <AddButton title={"Recur"} icon={"Reccure"} />
            </>
          ) : null}

          <AddButton
            title={keys.KEY100199}
            icon={"Export"}
            onClick={exportcsv}
          />

          {/* {Object ? null : (
            <AddButton title={keys.KEY100200} icon={"Preview"} />
          )} */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              position: "relative",
            }}
          >
            <AddButton
              title={keys.KEY100201}
              icon={"Print"}
              clickScreenChange={ToggleOpen}
            />
            {open ? (
              <Wrap>
                <Button hover={themeKeys.hover}>
                  <AiOutlineFileSearch color={themeKeys.primary} size={20} />
                  <BtnText>Preview</BtnText>
                </Button>
                <Button hover={themeKeys.hover}>
                  <PiPrinter color={themeKeys.primary} size={20} />
                  <BtnText>Print</BtnText>
                </Button>
              </Wrap>
            ) : null}
          </div>
          <AddButton title={keys.KEY100202} icon={"Report"} />
        </ButtonsDiv>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* <FilterButton>
            <Image>
              <img src={Filter2} onClick={HandleOnClick} alt="filter" />
            </Image>

            {isView ? <Filter /> : null}
          </FilterButton> */}
          {/* <Input placeholder="Search..." /> */}
        </div>
      </Main>
    </>
  );
};

export default FlowChartButtons;
