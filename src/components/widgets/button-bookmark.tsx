import React from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { bookmarkListState } from "src/recoil/atom";
import { INews } from "src/recoil/interfaces";
import IconBookmark from "./icon-bookmark";

const ButtonBookmark = (props: { onClick: Function }) => {
  const bookmarkList = useRecoilValue(bookmarkListState);
  const location = useLocation();
  const strLocation = location.search;
  const id: string | null = new URLSearchParams(strLocation).get("id");
  const find: INews | undefined = bookmarkList.find((item) => item.id === id);

  return (
    <button id="button-bookmark" onClick={() => props.onClick()}>
      <IconBookmark />
      {find ? "Remove Bookmark" : id ? "Add Bookmark" : "View Bookmark"}
    </button>
  );
};

export default ButtonBookmark;
