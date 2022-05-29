import React from "react";
import { useRecoilValue } from "recoil";
import { INews } from "src/recoil/interfaces";
import { newsListSections } from "src/recoil/state";
import ImageArticle from "./image-article";

const SectionNews = () => {
  const data = useRecoilValue(newsListSections);

  return (
    <>
      {Object.keys(data).map((item: any, i: number) => {
        const news: INews[] = (data as any)[item];
        if (news.length > 0) {
          return (
            <div style={{ marginTop: 32 }} key={i}>
              <div className="title">
                <h1>{item}</h1>
              </div>
              <div className="secondTop">
                {news.length > 0
                  ? news.map((item: INews, index: number) => {
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
            </div>
          );
        } else {
          return undefined;
        }
      })}
    </>
  );
};

export default SectionNews;
