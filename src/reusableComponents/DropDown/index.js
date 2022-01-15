import React, { useEffect, useRef, useState } from "react";
import style from "./Style";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";

const DropDown = ({ items, width, padding, border, top, setValue, value, onChange }) => {
  // open and close dropDown state
  const [openDropDown, setOpenDropDown] = useState(false);
  // dropDown default value
  const [defaultValue, setDefaultValue] = useState(items[0]);
  const dropDownRef = useRef(undefined);

  console.log({ vvvvvvvvvvaaaaaaaaaaaaaaalllllllllll: value });

  /*clicking on item and set the default value
  with clicked value */
  const itemClickHandler = (item) => {
    setDefaultValue(item);
    setValue(item);
    onChange(item);
    setOpenDropDown(!openDropDown);
  };
  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) setOpenDropDown(!openDropDown);
  };
  useEffect(() => {
    if (openDropDown) {
      document.addEventListener("click", handleClickOutside, { passive: true });
      return () => document.removeEventListener("click", handleClickOutside);
    }
  });

  return (
    <style.Div_dropDown ref={dropDownRef} width={width} padding={padding} border={border}>
      <style.Div_default_value_wrapper onClick={() => setOpenDropDown(!openDropDown)}>
        <p>{defaultValue}</p>
        <span>
          <style.I_chevron_icon className="fas fa-chevron-down" dropDown={openDropDown}></style.I_chevron_icon>
        </span>
      </style.Div_default_value_wrapper>
      <style.Div_dropDown_content dropDown={openDropDown} top={top}>
        <PerfectScrollbar>
          {React.Children.toArray(
            items.map((item) => (
              <style.P_item onClick={() => itemClickHandler(item)} item={item} defaultValue={defaultValue}>
                {item}
              </style.P_item>
            ))
          )}
        </PerfectScrollbar>
      </style.Div_dropDown_content>
    </style.Div_dropDown>
  );
};

// prop types
DropDown.propTypes = {
  items: PropTypes.array.isRequired,
  width: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
};

export default DropDown;
