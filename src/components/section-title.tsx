import React from "react";
import { useRecoilState } from "recoil";
import { orderByState } from "src/recoil/atom";

const SectionTitle = (props: { getNewsArticle: Function }) => {
  const [orderBy, setOrderBy] = useRecoilState(orderByState);

  return (
    <div className="title">
      <h1>Top stories</h1>
      <div>
        <button>View Bookmark</button>
        <select
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
  );
};

export default SectionTitle;
