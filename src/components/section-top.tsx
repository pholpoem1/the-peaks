import React from "react";
import { useRecoilValue } from "recoil";
import { newsListState } from "src/recoil/atom";
import { INews } from "src/recoil/interfaces";
import ImageArticle from "./image-article";

const SectionTop = () => {
  const newsList = useRecoilValue(newsListState);

  return (
    <>
      <div className="sectionTop">
        {newsList.length > 0
          ? newsList.slice(0, 5).map((item: INews, index: number) => {
              return (
                <div className={`item item-${index + 1}`} key={index}>
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
                <div className="item" key={index}>
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
