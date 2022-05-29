import React from "react";
import { useRecoilValue } from "recoil";
import { showToastAdd } from "src/recoil/atom";
import IconBookmark from "./icon-bookmark";

const ToastAdd = () => {
  const isOpen = useRecoilValue(showToastAdd);

  return (
    <div id={isOpen ? `toast-add-bookemark` : `toast-add-bookemark-hide`}>
      <IconBookmark />
      saved to bookmarks
    </div>
  );
};

export default ToastAdd;
