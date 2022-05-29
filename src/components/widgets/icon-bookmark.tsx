import React from "react";
import { useRecoilValue } from "recoil";
import { bookmarkState } from "src/recoil/atom";

const IconBookmark = () => {
  const bookmark = useRecoilValue(bookmarkState);
  return (
    <div id="bookmark">
      {bookmark ? (
        <img src="/assets/bookmarkon-icon@2x.svg" alt="bookmark" />
      ) : (
        <img src="/assets/bookmarkoff-icon@2x.svg" alt="bookmark" />
      )}
    </div>
  );
};

export default IconBookmark;
