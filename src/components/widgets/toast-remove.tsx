import React from "react";
import { useRecoilValue } from "recoil";
import { showToastRemove } from "src/recoil/atom";
import IconBookmark from "./icon-bookmark";

const ToastRemove = () => {
  const isOpen = useRecoilValue(showToastRemove);
  return (
    <div id={isOpen ? `toast-remove-bookemark` : `toast-remove-bookemark-hide`}>
      <IconBookmark />
      removed from bookmarks
    </div>
  );
};

export default ToastRemove;
