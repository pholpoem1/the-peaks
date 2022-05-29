import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { newsListState } from "src/recoil/atom";
import { INews } from "src/recoil/interfaces";
import ImageArticle from "./widgets/image-article";

const SectionTop = () => {
  const newsList = useRecoilValue(newsListState);
  const navigate = useNavigate();

  const onClickContent = (id: string) => {
    navigate(`/content?id=${id}`);
  };

  return (
    <>
      <div className="sectionTop">
        {newsList.length > 0
          ? newsList.slice(0, 5).map((item: INews, index: number) => {
              return (
                <div
                  className={`item item-${index + 1}`}
                  key={index}
                  onClick={() => {
                    onClickContent(item.id);
                  }}
                >
                  <ImageArticle />
                  <div
                    className={
                      index === 1 || index === 2 ? "overlay2" : "overlay"
                    }
                  >
                    <span className="webTitle">{item.webTitle}</span>
                  </div>
                </div>
              );
            })
          : undefined}
      </div>
      <div className="secondTop">
        {newsList.length > 0
          ? newsList.slice(6, 9).map((item: INews, index: number) => {
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
          : undefined}
      </div>
    </>
  );
};

export default SectionTop;
