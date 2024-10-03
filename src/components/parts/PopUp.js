import React, { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppProvider";
import CloseHide from "../../assets2/ChartOfAccountNew/HideButton.svg";
import unHide from "../../assets2/ChartOfAccountNew/OpenButton.svg";
import Full from "../../assets2/DashboardHeaderIcons/FullScreenIcon.svg";
import Close from "../../assets2/DashboardHeaderIcons/CloseIcon.svg";
// import Arrow from "../../assets2/DashboardHeaderIcons/BreadCrumbArrow.svg";

const StyledModalContainer = styled.div`
  position: fixed;
  /* left: ${(props) => (props.max ? "2" : "0")}; */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000080;
`;

const StyledModal = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  width: 100%;
  max-width: ${(props) => (props.max ? "98.6%" : "97.5%")};
  height: 100%;

  /* left: ${(props) => (props.max ? "2" : "0")}; */
  max-height: ${(props) => (props.max ? "100%" : "96%")};
`;

// const Wrapper2 = styled.div`
//   width: ${(props) => (props.isShow ? "92%" : "98.9%")};
//   min-width: 2rem;
//   font-size: 12px;
//   font-weight: 400;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   margin-left: ${(props) => (props.isShow ? "9.8rem" : "0.7rem")};
//   @media (max-width: 1366px) {
//     width: ${(props) => (props.isShow ? "87.2%" : "98.1%")};
//   }
//   @media (max-width: 2000px) {
//     width: ${(props) => (props.isShow ? "90.9%" : "98.7%")};
//   }
//   @media (max-width: 1800px) {
//     width: ${(props) => (props.isShow ? "89.3%" : "98.7%")};
//   }
//   @media (max-width: 1700px) {
//     width: ${(props) => (props.isShow ? "89%" : "98.7%")};
//   }
//   @media (max-width: 1370px) {
//     width: ${(props) => (props.isShow ? "87.5%" : "98.7%")};
//   }
//   @media (max-width: 1180px) {
//     width: ${(props) => (props.isShow ? "85.2%" : "98.7%")};
//   }
//   @media (max-width: 1024px) {
//     width: ${(props) => (props.isShow ? "83.2%" : "98.7%")};
//   }
//   @media (max-width: 600px) {
//     width: ${(props) => (props.isShow ? "75.2%" : "98.7%")};
//     /* margin-left: ${(props) => (props.isShow ? "9.8rem" : "0.7rem")}; */
//   }
// `;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 6px;
`;
const Btn = styled.div`
  cursor: pointer;
`;
const ShadowedImage = styled.img`
  position: absolute;
  cursor: pointer;
  top: 45%;
  left: ${(props) =>
    props.isShow && props.max
      ? "0.4%"
      : props.isShow !== true && props.max
      ? "0%"
      : props.isShow && props.max !== true
      ? "1%"
      : props.isShow !== true && props.max !== true
      ? "0.6%"
      : ""};
  z-index: 10;
`;
const Wrapper = styled.div``;
const IconsDiv = styled.div`
  position: absolute;
  right: 0;
`;
const InnerDiv = styled.div`
  margin-right: 33px;
  @media (max-width: 700px) {
    margin-right: 15px;
  }
`;
// const NavDiv = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
// `;
// const NavTitle = styled.div`
//   color: #7d8398;
//   display: flex;
//   align-items: center;
//   gap: 4px;
// `;
// const Image = styled.div`
//   display: flex;
//   @media (max-width: 600px) {
//     img {
//       width: 5px;
//     }
//   }
// `;
// const NavActiveTitle = styled.div`
//   color: #023f81;
// `;
export const PopUp = ({
  closeModal,
  open,
  children,
  firstNav,
  secNav,
  thirdNav,
  fourthNav,
  navActive,
}) => {
  const { close, setClose, isShow, setIsShow, setMaxModal } = useAppContext();
  const [max, setMax] = useState(false);
  const handleClose = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setClose(!close);
    setMax(false);
  };
  const handleMaximize = () => {
    setMax(true);
    setMaxModal(true);
    window.document.documentElement.requestFullscreen();
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setMax(false);
      setMaxModal(false);
    }
  };
  const HandleOnClick = () => {
    setIsShow(!isShow);
  };

  if (!open) return null;
  return (
    <Wrapper>
      <ShadowedImage
        src={isShow ? unHide : CloseHide}
        alt="ded"
        onClick={HandleOnClick}
        max={max}
        isShow={isShow}
      />
      <StyledModalContainer onClick={closeModal} max={max}>
        <StyledModal
          max={max}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* <Wrapper2 isShow={isShow}>
            <NavDiv>
              {firstNav ? (
                <NavTitle>
                  <div>{firstNav}</div>
                  <Image>
                    <img src={Arrow} alt="Nav" />
                  </Image>
                </NavTitle>
              ) : (
                ""
              )}
              {secNav ? (
                <NavTitle>
                  <div>{secNav}</div>

                  <img src={Arrow} alt="Nav" height={11} />
                </NavTitle>
              ) : (
                ""
              )}
              {thirdNav ? (
                <NavTitle>
                  <div>{thirdNav}</div>

                  <img src={Arrow} alt="Nav" height={11} />
                </NavTitle>
              ) : (
                ""
              )}{" "}
              {fourthNav ? (
                <NavTitle>
                  <div>{fourthNav}</div>

                  <img src={Arrow} alt="Nav" height={11} />
                </NavTitle>
              ) : (
                ""
              )}
              <NavActiveTitle>{navActive}</NavActiveTitle>
            </NavDiv>
            <Icons>
              <Btn onClick={handleMaximize}>
                <img src={Full} alt="i" />
              </Btn>
              <Btn onClick={handleClose}>
                <img src={Close} alt="i" />
              </Btn>
            </Icons>
          </Wrapper2> */}
          <IconsDiv>
            <InnerDiv>
              <Icons>
                <Btn onClick={handleMaximize}>
                  <img src={Full} alt="i" />
                </Btn>
                <Btn onClick={handleClose}>
                  <img src={Close} alt="i" />
                </Btn>
              </Icons>
            </InnerDiv>
          </IconsDiv>

          {children}
        </StyledModal>
      </StyledModalContainer>
    </Wrapper>
  );
};
