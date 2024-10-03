import React, { useEffect, useState, useCallback } from "react";
import {
  Line,
  Btn11,
  SubText11,
  Text11,
  Para11,
  Div,
} from "../Components/HeroSections/Style";
import { useSelector } from "react-redux";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import styled, { keyframes } from "styled-components"; // Added keyframes import
import { GetActivities } from "../../Api/Apis";
import { formatDate } from "../../appUtils/dateFormatter";

// Animation Keyframes
const slideUp = keyframes`
  0% {
    opacity: 1;
    height: 263px; /* Match the open height */
  }
  100% {
    opacity: 0;
    height: 0;
  }
`;

// Slide down (open) animation
const slideDown = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: 263px; /* Match the open height */
  }
`;

// Styled Components
const DropButton = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  display: flex;
  padding: 10px;
  cursor: pointer;
  width: fit-content;
  min-width: 4.2rem;
  margin: 15px 0px;
  transition: background-color 0.5s ease;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;

  &:hover {
    background-color: ${(props) => darkenColor(props.color, 0.1)};
  }
`;

const TitleDrop = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  margin-left: 7px;
`;

const AnimatedWrapper = styled.div`
  animation: ${(props) => (props.isOpen ? slideDown : slideUp)} 0.3s ease-in-out
    forwards;
  height: ${(props) =>
    props.isOpen ? "263px" : "0"}; /* Adjust based on content */
  overflow: hidden; /* Ensures content is hidden when closed */
  opacity: ${(props) => (props.isOpen ? "1" : "0")}; /* Fades in/out content */
  background-color: #ffffff; /* Background for the wrapper */
  box-shadow: 0px 1.7px 8.5px 0px #00000040;
  border-radius: 8px;
  padding: ${(props) => (props.isOpen ? "20px" : "0")}; /* Padding when open */

  /* Scrollbar styling */
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

// Main Component
const ActivityPart = ({ ShowButton, Val, filterName, selectedCode }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const dateFormat = useSelector((state) => state.dateFormat.format);
  const dateSeparator = useSelector((state) => state.dateSeparator.separator);

  const [value, setValue] = useState(true);
  const [data, setData] = useState([]);

  const HandleOnChange = () => {
    setValue(!value);
  };

  // Fetch activity data based on selectedCode (if provided) or filterName
  const fetchActivity = useCallback(async () => {
    if (selectedCode) {
      const res = await GetActivities();
      if (res.status) {
        const temp = res.data
          .filter((x) => x.name === filterName && x.entry === selectedCode)
          .sort((a, b) => new Date(b.activityDate) - new Date(a.activityDate));

        const formattedData = temp.map((activity) => {
          // Parse the UTC date string into a Date object
          const utcDate = new Date(activity.activityDate + "Z"); // Ensure UTC by appending 'Z'

          // Format the date
          const formattedDate = formatDate(
            activity.activityDate,
            dateFormat,
            dateSeparator
          );

          // Convert UTC time to local time zone
          const formattedTime = utcDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true, // Set to false for 24-hour format
          });

          return {
            ...activity,
            activityDate: formattedDate, // Formatted date
            activityTime: formattedTime, // Local time
          };
        });
        setData(formattedData);
      }
    }
  }, [dateFormat, dateSeparator, filterName, selectedCode]);

  useEffect(() => {
    fetchActivity();
  }, [dateFormat, dateSeparator, selectedCode]);

  const uniqueDates = new Set(); // Keep track of rendered dates

  return (
    <div
      id="activitySection"
      style={{ marginBottom: "1.4rem", height: "400px" }}
    >
      <DropButton
        onClick={Val ? null : HandleOnChange}
        color={themeKeys.primary}
      >
        {Val ? null : value ? (
          <FaAngleDown style={{ fontSize: "13px", color: "white" }} />
        ) : (
          <FaAngleRight style={{ fontSize: "13px", color: "white" }} />
        )}
        <TitleDrop txtColor={"#fff"}>ACTIVITY</TitleDrop>
      </DropButton>

      <AnimatedWrapper isOpen={value}>
        {data.map((x, i) => {
          const isNewDate = !uniqueDates.has(x.activityDate); // Check if the date is new
          if (isNewDate) {
            uniqueDates.add(x.activityDate); // Add the date to the set
          }

          return (
            <Div key={i}>
              {/* Only render date if it's new */}
              {isNewDate && (
                <Btn11 btnColor={themeKeys.lightVersion}>
                  {x.activityDate}
                </Btn11>
              )}
              <SubText11>
                <Text11>{x.activityTime}</Text11>
                <Para11>{x.description}</Para11>
              </SubText11>
            </Div>
          );
        })}
      </AnimatedWrapper>
      <Line />
    </div>
  );
};

export default ActivityPart;
