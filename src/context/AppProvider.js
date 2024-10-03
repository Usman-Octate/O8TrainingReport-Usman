// AppContext.js
import React, { createContext, useState, useContext } from "react";

// Creating the context
const AppContext = createContext();

// Creating the provider component
export const AppProvider = ({ children }) => {
  const [maxModal, setMaxModal] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [close, setClose] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [isView, setIsView] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(true);
  const [isDrop, setIsDrop] = useState(true);
  const [click, setClick] = useState(true);
  const [value, setValue] = useState(null);

  const HandleOnClick = (val) => {
    console.log(value);
    setValue(val);
  };

  const HandleOnChange = () => {
    setIsView(!isView);
  };
  const HandleOnEvent = () => {
    setIsOpen(!isOpen);
  };
  const Handle = () => {
    setIsToggle(!isToggle);
  };
  const HandleOnDropdown = () => {
    setIsDrop(!isDrop);
  };
  const OnChange = () => {
    setClick(!click);
  };
  return (
    <AppContext.Provider
      value={{
        maxModal,
        setMaxModal,
        setClose,
        close,
        setClose,
        isShow,
        setIsShow,
        minimize,
        setMinimize,
        isView,
        setIsView,
        HandleOnChange,
        HandleOnEvent,
        isOpen,
        setIsOpen,
        isToggle,
        setIsToggle,
        Handle,
        isDrop,
        setIsDrop,
        HandleOnDropdown,
        click,
        setClick,
        OnChange,
        value,
        setValue,
        HandleOnClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to consume the context
export const useAppContext = () => useContext(AppContext);
