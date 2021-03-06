import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { INews } from "src/recoil/interfaces";
import { newsListSections } from "src/recoil/state";
import ImageArticle from "./widgets/image-article";

const SectionNews = () => {
  const data = useRecoilValue(newsListSections);
  const navigate = useNavigate();

  const onClickContent = (id: string) => {
    navigate(`/content?id=${id}`);
  };

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
