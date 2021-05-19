import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { Link } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="left__menu">
        <div className="header__title">
          <Link href="#">
            <HeaderOption title="Projects" />
          </Link>
        </div>
        <div className="header__title">
          <Link href="#">
            <HeaderOption title="About Me" />
          </Link>
        </div>
        <div className="header__title">
          <Link href="#">
            <HeaderOption title="Github" />
          </Link>
        </div>
      </div>
      <div className="right__menu"></div>
    </div>
  );
}

export default Header;
