import React from "react";
import ToastAdd from "./toast-add";
import ToastRemove from "./toast-remove";

const Footer = () => {
  return (
    <>
      <div className="footer"></div>
      <ToastRemove />
      <ToastAdd/>
    </>
  );
};

export default Footer;
