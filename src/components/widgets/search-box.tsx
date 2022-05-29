import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "src/recoil/atom";

const SearchBox = () => {
  const [text, setText] = useRecoilState(textState);

  return (
    <div id="search-box">
      <input
        id="search-text"
        type="text"
        value={text}
        placeholder="Search all news"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
