import styled from "styled-components";
import Handle from "../../assets2/SideNavIcons/Rectangle65.svg";
import HandleClosed from "../../assets2/SideNavIcons/navClosedBtn.svg";
import Handle2 from "../../assets2/SideNavIcons/Handle2.svg";
import PriHandle from "../../assets2/SideNavIcons/PriHandleOpen.svg";
import IndigoHandle from "../../assets2/SideNavIcons/IndigoHandle.svg";
import AuroraHandle from "../../assets2/SideNavIcons/AuroraHandle.svg";
import SpaceHandle from "../../assets2/SideNavIcons/SpaceHandle.svg";
import SpaceHandle2 from "../../assets2/SideNavIcons/SpaceHandleOpen.svg";
import MidnightHandle from "../../assets2/SideNavIcons/MidnightHandle.svg";
import RoseHandle from "../../assets2/SideNavIcons/RoseHandle.svg";
export const Nav = styled.div`
  background: ${(props) => props.bgColor};
  overflow: hidden;
  width: 270px;
  min-width: 270px;
  max-width: 270px;
  height: 100vh;
  border-radius: 0 8px 8px 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); // Adds shadow on the right side
  @media (max-width: 600px) {
    width: 16rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin: auto;
  padding: 10px 0;
`;
export const Text = styled.div`
  size: 16px;
  color: ${(props) => props.color};
  font-weight: 700;

  margin: 0 0 0 6px;
  max-width: 7.5rem;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const LogoImage = styled.div`
  display: flex;
  @media (max-width: 600px) {
    img {
      width: 45px;
    }
  }
`;
export const Content = styled.div`
  margin: 22px 0;
  overflow-y: auto;
  max-height: calc(100vh - 150px);

  /* Style scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e1e1e199;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
`;
export const HideNav = styled.div`
  background-image: url(${Handle});
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  /* border-radius: 0 225px 225px 0; */
  width: 16.5px;
  height: 95.5px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  z-index: 1000;
`;
export const PriHideNav = styled.div`
  background-image: url(${PriHandle});
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  /* border-radius: 0 225px 225px 0; */

  width: 14px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  z-index: 1;
`;
export const IndigoHideNav = styled.div`
  background-image: url(${IndigoHandle});

  width: 15px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  z-index: 2000;
`;
export const RoseHideNav = styled.div`
  background-image: url(${RoseHandle});

  width: 15px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  z-index: 2000;
`;
export const AuroraHideNav = styled.div`
  background-image: url(${AuroraHandle});

  width: 15px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  z-index: 2000;
`;
export const SpaceHideNav = styled.div`
  background-image: url(${SpaceHandle2});

  width: 15px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  z-index: 2000;
`;
export const MidnightHideNav = styled.div`
  background-image: url(${MidnightHandle});

  width: 15px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  z-index: 2000;
`;
export const ClosedNav = styled.div`
  background-image: url(${Handle2});
  background-size: contain;
  background-repeat: no-repeat;
  width: 16.5px;
  height: 95.5px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  left: 3.4rem;
  // left: 58px;
  left: 3.4rem;
  display: flex;
  @media (max-width: 1400px) {
    left: 3.3rem;
  }
  @media (max-width: 1300px) {
    left: 3.2rem;
  }
  @media (max-width: 1200px) {
    left: 3rem;
  }
  @media (max-width: 1100px) {
    top: 52%;
    left: 3.2rem;
  }
  @media (max-width: 600px) {
    left: 2.4rem;
  }
  @media (max-width: 500px) {
    left: 2.35rem;
  }
  @media (max-width: 400px) {
    left: 2.3rem;
  }
  @media (max-width: 300px) {
    left: 2rem;
  }
  @media (max-width: 200px) {
    left: 1.8rem;
  }
`;
export const NavHide = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 58px;
  height: 100vh;
  overflow-y: auto;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 600px) {
    width: 45px;
  }
`;
export const ContentHideNav = styled.div`
  margin: 7.4rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-top: 6.17rem;
  }
  /* gap: 1.24rem; */
`;
export const LogoImage2 = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;
export const CloseNavHandle = styled.div`
  background-image: url(${Handle2});
  width: 14.4px;
  height: 94.2px;
  position: absolute;
  left: 3.5rem;
  top: 49%;
  cursor: pointer;
  z-index: 4000;
  border-radius: 0 300px 300px 0;
`;
export const PriCloseNavHandle = styled.div`
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  background-image: url(${PriHandle});
  width: 15px;
  height: 94.2px;
  position: absolute;
  left: 3.43rem;
  top: 49%;
  cursor: pointer;
  z-index: 4;
  border-radius: 0 300px 300px 0;
`;
export const IndigoCloseNavHandle = styled.div`
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  background-image: url(${IndigoHandle});
  width: 15px;
  height: 94.2px;
  position: absolute;
  left: 3.5rem;
  top: 49%;
  cursor: pointer;
  z-index: 4000;
  border-radius: 0 300px 300px 0;
`;
export const AuroraCloseNavHandle = styled.div`
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  background-image: url(${AuroraHandle});
  width: 15px;
  height: 94.2px;
  position: absolute;
  left: 3.5rem;
  top: 49%;
  cursor: pointer;
  z-index: 4000;
  border-radius: 0 300px 300px 0;
`;
export const RoseCloseNavHandle = styled.div`
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  background-image: url(${RoseHandle});
  width: 15px;
  height: 94.2px;
  position: absolute;
  left: 3.5rem;
  top: 49%;
  cursor: pointer;
  z-index: 4000;
  border-radius: 0 300px 300px 0;
`;
export const SpaceCloseNavHandle = styled.div`
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  background-image: url(${SpaceHandle});
  width: 15px;
  height: 94.2px;
  position: absolute;
  left: 3.5rem;
  top: 49%;
  cursor: pointer;
  z-index: 4000;
  border-radius: 0 300px 300px 0;
`;
export const MidnightCloseNavHandle = styled.div`
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  background-image: url(${MidnightHandle});
  width: 15px;
  height: 94.2px;
  position: absolute;
  left: 3.5rem;
  top: 49%;
  cursor: pointer;
  z-index: 4000;
  border-radius: 0 300px 300px 0;
`;
