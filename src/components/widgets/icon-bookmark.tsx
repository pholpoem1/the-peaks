import React from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { bookmarkListState, bookmarkState } from "src/recoil/atom";
import { INews } from "src/recoil/interfaces";

const IconBookmark = () => {
  const bookmark = useRecoilValue(bookmarkState);
  const bookmarkList = useRecoilValue(bookmarkListState);
  const location = useLocation();
  const strLocation = location.search;
  const id: string | null = new URLSearchParams(strLocation).get("id");
  const find: INews | undefined = bookmarkList.find((item) => item.id === id);

  return (
    <div id="bookmark">
      {bookmark || find ? (
        <img src="/assets/bookmarkon-icon@2x.svg" alt="bookmark" />
      ) : (
        <img src="/assets/bookmarkoff-icon@2x.svg" alt="bookmark" />
      )}
    </div>
  );
};

export default IconBookmark;
