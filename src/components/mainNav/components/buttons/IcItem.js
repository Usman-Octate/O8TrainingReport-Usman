import React from "react";
import { IconContext } from "react-icons/lib";

function IcItem({ color, iconsrc, isSubMenu }) {
  return (
    <IconContext.Provider
      value={{ color: color, size: isSubMenu ? "18px" : "20px" }}
    >
      <div style={{ display: "flex" }}>{iconsrc}</div>
    </IconContext.Provider>
  );
}

export default IcItem;
