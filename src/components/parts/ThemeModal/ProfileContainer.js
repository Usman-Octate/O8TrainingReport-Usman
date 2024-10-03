import React, { useState } from "react";
// import image from "../../../assets2/ProfileModal/profile.svg";
import Mail from "../../SVGicons/Mail";
import Customize from "../../SVGicons/Customize";
import ColPallet from "../../SVGicons/ColPallet";
import ThemeInfo from "../../SVGicons/ThemeInfo";
import Signout from "../../SVGicons/Signout";
import { LuUserCircle2 } from "react-icons/lu";
import {
  Wrapper,
  Text,
  Name,
  Subtext,
  Message,
  Title,
  Line,
  ProfileDiv,
} from "./Style";
import { useSelector } from "react-redux";
import ThemeContainer from "./ThemeContainer";
import { useNavigate } from "react-router-dom";

const ProfileContainer = () => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const User = "John Doe Abdullah";
  const Email = email ? email : "Not Signin";
  const [value, setValue] = useState(1);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };
  const  handleClickOutside = () => {
 console.log("Profile OutsideClick")
    
  }
  const handleOnClick = (action) => {
    switch (action) {
      case "Themes":
        setValue(2);
        break;
      case "Logout":
        handleLogout();
        break;
      default:
        break;
    }
  };
  const messageItems = [
    { id: 1, icon: Mail, title: "Message" },
    { id: 2, icon: Customize, title: "Profile" },
    {
      id: 3,
      icon: ColPallet,
      title: "Themes",
    },
    { id: 4, icon: ThemeInfo, title: "Product Information" },
    {
      id: 5,
      icon: Signout,
      title: "Logout",
    },
  ];

  return value === 1 ? (
    <Wrapper>
      <ProfileDiv>
        <LuUserCircle2 />
        <Text>
          <Name>{User}</Name>
          <Subtext>{Email}</Subtext>
        </Text>
      </ProfileDiv>
      <Line />
      {messageItems.map(({ id, icon: Icon, title }) => (
        <Message key={id} onClick={() => handleOnClick(title)}>
          <Icon fill={themeKeys.primary} />
          <Title>{title}</Title>
        </Message>
      ))}
    </Wrapper>
  ) : value === 2 ? (
    <ThemeContainer />
  ) : null;
};

export default ProfileContainer;
