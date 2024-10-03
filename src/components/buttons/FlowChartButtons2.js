import React, { useEffect, useState } from "react";
import SearchIcon from "../../assets2/DashboardHeaderIcons/SearchIcon.svg";
import Filter2 from "../../assets2/ButtonIcons/Filter.svg";
import AddButton from "../../components/buttons/AddButton";
import Filter from "../parts/Filter";
import styled from "styled-components";
import { PopUp } from "../parts/PopUp";
import { createPortal } from "react-dom";
import { useAppContext } from "../../context/AppProvider";

const FilterButton = styled.button`
  background-color: #ffffff;
  border: none;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  padding: 8px 17px;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 1024px) {
    padding: 4px 13px;
  }
`;

const Input = styled.input`
  padding: 7px 35px;
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

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
    margin: 30px 0px 10px 0px;
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
const Image = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    img {
      width: 15px;
    }
  }
`;
const FlowChartButtons = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const { close } = useAppContext();
  useEffect(() => {
    handlePopup();
  }, [close]);
  const handlePopup = () => {
    setShowPopup(false);
  };
  const popupOpen = () => {
    setShowPopup(true);
  };
  const [isView, setIsView] = useState(false);

  const HandleOnClick = () => {
    setIsView(!isView);
  };

  return (
    <>
      <Main>
        <ButtonsDiv>
          <AddButton
            fixWidth={true}
            title={"Add New"}
            icon={"AddWhite"}
            color={"blue"}
            onClick={popupOpen}
            height={false}
          />

          <AddButton title={"Edit"} icon={"Edit"} height={false} />

          <AddButton title={"Customize"} icon={"Custom"} height={false} />

          <AddButton title={"Export"} icon={"Export"} height={false} />

          <AddButton title={"Preview"} icon={"Preview"} height={false} />

          <AddButton title={"Print"} icon={"Print"} height={false} />

          <AddButton title={"Reports"} icon={"Report"} height={false} />
        </ButtonsDiv>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FilterButton>
            <Image>
              <img src={Filter2} onClick={HandleOnClick} alt="filter" />
            </Image>
            {isView ? <Filter /> : null}
          </FilterButton>
          <Input placeholder="Search..." />
        </div>
      </Main>

      {createPortal(
        <PopUp
          closeModal={handlePopup}
          open={showPopup}
          firstNav={"Home"}
          secNav={"Finance"}
          thirdNav={"Chart of Account list"}
          navActive={"Chart of Account - New"}
        >
          {props.content}
        </PopUp>,
        document.body
      )}
    </>
  );
};

export default FlowChartButtons;
