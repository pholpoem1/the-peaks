import React from "react";
import Logo from "./logo";
import SearchBox from "./search-box";

const Header = () => {
  return (
    <header>
      <div className="toolbar">
        <Logo />
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
