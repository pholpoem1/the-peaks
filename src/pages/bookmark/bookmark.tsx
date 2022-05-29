import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Layout from "src/components/layout";
import ImageArticle from "src/components/widgets/image-article";
import { bookmarkListState } from "src/recoil/atom";
import { INews } from "src/recoil/interfaces";

const Bookmark = () => {
  const bookmarkList = useRecoilValue(bookmarkListState);
  const navigate = useNavigate();

  const onClickContent = (id: string) => {
    navigate(`/content?id=${id}`);
  };

  return (
    <Layout>
      <div style={{ marginTop: 32 }}>
        <div className="title">
          <h1>Bookmark</h1>
        </div>
        <div className="secondTop">
          {bookmarkList.length > 0 ? (
            bookmarkList.map((item: INews, index: number) => {
              return (
                <div
                  className="item"
                  key={index}
                  onClick={() => {
                    onClickContent(item.id);
                  }}
                >
                  <ImageArticle />
                  <div className="overlay2">
                    <span className="webTitle">{item.webTitle}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>Not found data...</h3>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Bookmark;
