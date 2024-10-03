export const hiddenArrow = "Layout & Templates";
export const hiddenArrow2 = "Cash Flow Forecast";

export const isSubmenuAvailable = (item) =>
  item === "KEY10011" ||
  item === "KEY10049" ||
  item === "KEY10081" ||
  item === "KEY10083" ||
  item === "KEY10076" ||
  item === "KEY10066" ||
  item === "KEY10058" ||
  item === "KEY1007" ||
  // item === "KEY10085" ||
  item === "KEY10086" ||
  item === "KEY10087" ||
  item === "KEY10088" ||
  // item === "KEY10089" ||
  // item === "KEY10090"||
  item === "KEY100363";

export const isShowArrow = (item) =>
  item === "KEY10011" ||
  item === "KEY10049" ||
  item === "KEY10081" ||
  item === "KEY10083" ||
  item === "KEY10076" ||
  item === "KEY10066" ||
  item === "KEY10058" ||
  item === "KEY1007" ||
  // item === "KEY10085" ||
  item === "KEY10086" ||
  item === "KEY10087" ||
  item === "KEY10088" ||
  // item === "KEY10089" ||
  item === hiddenArrow ||
  item === hiddenArrow2 ||
  // item === "KEY10090" ||
  item === "KEY100363";
