import React from "react";

const Logo = () => <img src="/assets/Logo_White.png" alt="logo" width={142} />;

const Header = () => {
  return (
    <header>
      <div className="toolbar">
        <div id="logo">
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
