import React from "react";
import styled, { keyframes } from "styled-components";
import ChartAccountInput from "../../components/Inputs/ChartAccountInput";
import { useAppContext } from "../../context/AppProvider";
import { useSelector } from "react-redux";
import DropDown from "../../components/buttons/DropDown";
import DropDownPriTheme from "../../components/buttons/DropDownPriTheme";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

// Slide up animation (close)
const slideUp = keyframes`
  0% {
    opacity: 1;
    max-height: 500px; /* Adjusted to be smaller but enough to accommodate content */
  }
  100% {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }
`;

// Slide down (open) animation - reveals content by expanding height and fading in
const slideDown = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }
  100% {
    opacity: 1;
    max-height: 500px; /* Adjust to match content size */
  }
`;

// Wrapper for animated content with smoother transitions
const Wrapper = styled.div`
  animation: ${(props) => (props.isOpen ? slideDown : slideUp)} 0.3s ease-in-out
    forwards;
  transition: max-height 0.6s ease-in-out, opacity 0.3s ease-in-out;
  max-height: ${(props) =>
    props.isOpen ? "500px" : "0"}; /* Adjust based on content */
  overflow: hidden; /* Ensures content is hidden when closed */
  opacity: ${(props) => (props.isOpen ? "1" : "0")}; /* Fades in/out content */
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin: 20px 0px 20px 10px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
`;

const Line = styled.div`
  background-color: #e0e0e0;
  height: 0.5px;
  width: 100%;
  margin: 0px 0px;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  margin-left: 5px;
  width: 110px;
  text-align: center;
`;

const Input = styled.div`
  width: 200px;
  margin: 20px 0px;
`;

const MainSec = styled.div``;

const Image = styled.div`
  margin-left: -10px;
`;

const TitleDrop = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  margin-left: 7px;
`;

const DropButton = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  display: flex;
  padding: 10px;
  cursor: pointer;
  width: fit-content;
  min-width: 5rem;
  margin: 15px 0px;
  transition: background-color 0.5s ease;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  &:hover {
    background-color: ${(props) => darkenColor(props.color, 0.1)};
  }
`;

const darkenColor = (color, percent) => {
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

const CustomFields = ({
  Line1,
  value1,
  onChange1,
  value2,
  onChange2,
  value3,
  onChange3,
  value4,
  onChange4,
}) => {
  const { isToggle, Handle } = useAppContext();
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const keys = useSelector((state) => state.localization.keys);
  const primaryColors = ["#2E90FA", "#F63D68", "#15B79E", "#6172F3"];

  return (
    <>
      <MainSec id="contact">
        {primaryColors.includes(themeKeys.primary) ? (
          <DropButton onClick={Handle} color={themeKeys.primary}>
            {isToggle ? (
              <DropDownPriTheme icon={"ArrowDown"} />
            ) : (
              <DropDownPriTheme icon={"ArrowRight"} />
            )}
            <TitleDrop txtColor={"#fff"}>{keys.KEY100248}</TitleDrop>
          </DropButton>
        ) : (
          <Title>
            <Image style={{ cursor: "pointer" }} onClick={Handle}>
              {isToggle ? (
                <FaAngleDown size={13.5} color="#fff" />
              ) : (
                <FaAngleRight size={13.5} color="#fff" />
              )}
            </Image>
            <Text txtColor={themeKeys.primary}>{keys.KEY100248}</Text>
          </Title>
        )}

        {Line1 === "true" && <Line />}

        {/* Sliding animation for the content */}
        <Wrapper isOpen={isToggle}>
          <Input>
            <ChartAccountInput
              Name={keys.KEY100249}
              Padding={true}
              onChange={onChange1}
              value={value1}
            />
          </Input>
          <Input>
            <ChartAccountInput
              Name={keys.KEY100250}
              Padding={true}
              onChange={onChange2}
              value={value2}
            />
          </Input>
          <Input>
            <ChartAccountInput
              Name={keys.KEY100251}
              Padding={true}
              onChange={onChange3}
              value={value3}
            />
          </Input>
          <Input>
            <ChartAccountInput
              Name={keys.KEY100252}
              Padding={true}
              onChange={onChange4}
              value={value4}
            />
          </Input>
        </Wrapper>
      </MainSec>

      {Line1 !== "true" && <Line />}
    </>
  );
};

export default CustomFields;
