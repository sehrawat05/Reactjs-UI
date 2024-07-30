import React from "react";
import { FcSearch } from "react-icons/fc";
import { IoFilterSharp } from "react-icons/io5";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";
const Navbar = ({bgColor,color,toggleButton,toggle}) => {
  return (
    <>
      <div className="nav_bar" >
        <div className="logo" style={{
        backgroundColor:`${bgColor}`,
        color:`${color}`
      }}>WDM
            <div onClick={toggleButton}>{toggle?(
                <FaToggleOn />
            ):(
                <FaToggleOff />
            )}{" "}</div></div>
        <div className="search" style={{
        backgroundColor:`${bgColor}`,
        color:`${color}`
      }}>
          <div className="left">
            <FcSearch />
            Search here...
          </div>
          <div className="right">
            <IoFilterSharp />
            Filters
          </div>
        </div>
        <div className="seller" style={{
        backgroundColor:`${bgColor}`,
        color:`${color}`
      }}>Become a seller</div>
      </div>
    </>
  );
};

export default Navbar;
