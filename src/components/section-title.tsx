import React from "react";
import { useRecoilState } from "recoil";
import { orderByState } from "src/recoil/atom";
import Bookmark from "./widgets/bookmark";

const SectionTitle = (props: { getNewsArticle: Function }) => {
  const [orderBy, setOrderBy] = useRecoilState(orderByState);

  return (
    <div className="title">
      <h1>Top stories</h1>
      <div className="sectionTitle">
        <div>
          <button id="button-bookmark">
            <Bookmark /> View Bookmark
          </button>
        </div>
        <div>
          <select
            id="select-box"
            value={orderBy}
            onChange={async (e: any) => {
              await setOrderBy(e.target.value);
              props.getNewsArticle(e.target.value);
            }}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
