import React, { useState } from "react";
import CloseNav from "./CloseNav";
import OpenNav from "./OpenNav";
import { useSelector } from "react-redux";

const SideNav = ({ onOptionClick }) => {
  const keys = useSelector((state) => state.localization.keys);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const handleDropDownOptionClick = (option) => {
    setSelectedOption(option);
  };
  return isOpen ? (
    <OpenNav
      handleDropDownOptionClick={handleDropDownOptionClick}
      onOptionClick={onOptionClick}
      selectedOption={selectedOption}
      handleClose={handleClose}
      setSelectedOption={setSelectedOption}
    />
  ) : (
    <CloseNav
      handleDropDownOptionClick={handleDropDownOptionClick}
      onOptionClick={onOptionClick}
      selectedOption={selectedOption}
      handleClose={handleClose}
      setSelectedOption={setSelectedOption}
    />
  );
};

export default SideNav;
