import React from "react";
import { useRecoilValue } from "recoil";
import { loaderState } from "src/recoil/atom";

const Loader = () => {
  const isOpen = useRecoilValue(loaderState);

  return (
    <div id="overlay" style={{ display: isOpen ? "block" : "none" }}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
