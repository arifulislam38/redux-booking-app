import React from "react";
import { useDispatch } from "react-redux";
import image from "../../assets/img/lws-logo.svg";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <header id="header">
        <div className="container">
          <img src={image} alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="dummy">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
